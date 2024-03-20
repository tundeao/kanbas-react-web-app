def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    return merge(left_half, right_half)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    while i < len(left):
        result.append(left[i])
        i += 1
    
    while j < len(right):
        result.append(right[j])
        j += 1
    
    return result

import unittest

class TestMergeSort(unittest.TestCase):
    def test_merge_sort(self):
        arr = [5, 3, 2, 4, 1]
        result = merge_sort(arr)
        self.assertEqual(result, [1, 2, 3, 4, 5])

    def test_merge_sort_empty(self):
        arr = []
        result = merge_sort(arr)
        self.assertEqual(result, [])

    def test_merge_sort_one_element(self):
        arr = [1]
        result = merge_sort(arr)
        self.assertEqual(result, [1])

    def test_merge_sort_negative_numbers(self):
        arr = [-5, -1, -4, -2, -3]
        result = merge_sort(arr)
        self.assertEqual(result, [-5, -4, -3, -2, -1])

if __name__ == '__main__':
    unittest.main()