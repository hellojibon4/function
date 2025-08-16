const numbers = [1, 2, 3, 4, 5];
const players = [{}, {}, {}, {}]
const exam_marks = [
    [32, 45, 67, 89, 90, 10],
    [28, 34, 56, 78, 88, 92],
    [30, 40, 50, 60, 70, 80],
    [25, 35, 45, 55, 65, 75],
    [29, 39, 49, 59, 69, 79]
]

console.log(exam_marks[1])
const fast_class_fast = exam_marks[0]
console.log(fast_class_fast[0])
console.log(exam_marks[0][0])
exam_marks[0][1] = 300
exam_marks[1][1] = 300
exam_marks[2][1] = 300
exam_marks[1].pop()
exam_marks[1].push(87)
exam_marks[1].shift()
exam_marks[1].unshift(29)
console.log(exam_marks)

for (const marks of exam_marks) {
    console.log(marks)
}