import React, { useEffect, useState } from "react";
import "./index.css";
// import "../../../style.css";
import db from "../../Database";
import {
	FaEllipsisV,
	FaCheckCircle,
	FaPlusCircle,
	FaIndent,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
	addModule,
	deleteModule,
	updateModule,
	setModule,
	setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
	const { courseId } = useParams();
	useEffect(() => {
		client
			.findModulesForCourse(courseId)
			.then((modules) => dispatch(setModules(modules)));
	}, [courseId]);

	const moduleList = useSelector(
		(state: KanbasState) => state.modulesReducer.modules
	);
	const module = useSelector(
		(state: KanbasState) => state.modulesReducer.module
	);
	const dispatch = useDispatch();

	const [selectedModule, setSelectedModule] = useState(moduleList[0]);

	const handleAddModule = () => {
		client.createModule(courseId, module).then((module) => {
			dispatch(addModule(module));
		});
	};

	const handleDeleteModule = (moduleId: string) => {
		client.deleteModule(moduleId).then((status) => {
			dispatch(deleteModule(moduleId));
		});
	};

	const handleUpdateModule = async () => {
		const status = await client.updateModule(module);
		dispatch(updateModule(module));
	};

	return (
		<>
			{
				<div className="wd-modules-header text-right">
					<button type="submit">Collapse All</button>
					<button type="submit">View Progress</button>
					<button type="submit">Publish All</button>
					<button
						type="submit"
						style={{ backgroundColor: "red", color: "white" }}>
						+ Module
					</button>
					<button type="submit">
						<i className="fa fa-ellipsis-v"></i>
					</button>
				</div>
			}
			<ul className="list-group wd-modules">
				<li className="list-group-item">
					<div className="container-fluid row align-items-center">
						<div className="col-2">
							<button
								className="btn btn-primary"
								style={{ width: "100%" }}
								onClick={handleAddModule}>
								Add
							</button>
							<button
								className="btn btn-secondary"
								style={{ width: "100%" }}
								onClick={handleUpdateModule}>
								Update
							</button>
						</div>

						<div className="col-5 m-1">
							<input
								value={module.name}
								onChange={(e) =>
									dispatch(setModule({ ...module, name: e.target.value }))
								}
								className="form-control"
							/>
						</div>

						<div className="col-4">
							<textarea
								className="form-control"
								value={module.description}
								onChange={(e) =>
									dispatch(
										setModule({ ...module, description: e.target.value })
									)
								}
							/>
						</div>
					</div>
				</li>

				{moduleList
					.filter((module) => module.course === courseId)
					.map((module, index) => (
						<li
							key={index}
							className="list-group-item"
							onClick={() => setSelectedModule(module)}>
							<div>
								<button
									className="btn btn-danger"
									onClick={() => handleDeleteModule(module._id)}>
									{" "}
									Delete
								</button>
								<button onClick={() => dispatch(setModule(module))}>
									Edit
								</button>
								<FaEllipsisV className="me-2" /> {module.name}
								<span className="float-end">
									<FaCheckCircle className="text-success" />
									<FaPlusCircle className="ms-2" />
									<FaEllipsisV className="ms-2" />
								</span>
							</div>
							{selectedModule?._id === module._id && (
								<ul className="list-group">
									{module.lessons?.map((lesson: any, index: any) => (
										<li className="list-group-item" key={index}>
											<FaEllipsisV className="me-2" />
											{lesson.name}
											<span className="float-end">
												<FaCheckCircle className="text-success" />
												<FaEllipsisV className="ms-2" />
											</span>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
			</ul>
		</>
	);
}
export default ModuleList;