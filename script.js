class Student{
    constructor(name, completedItems, totalItems){
         this.name = name
         this.completedItems = completedItems
         this.totalItems = totalItems
    }
}

function Calculate(complete, total){
    try {
        while(total != 0){
        let percent = complete / total
        return percent
    }
    } catch (error) {
        console.error(`Invalid: ${error}`)
    }
}

function test1(){
    const student = new Student("Taylor", 9, 10)
    const percent = Calculate(student.completedItems, student.totalItems) * 100
    switch(percent){
        case percent >= 90:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: On Track
                `)
            break
        case percent >=70 && percent <=89:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: Making Progress
                `)
            break
        case percent >= 69:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: Needs Attention
                `)
            break
        default:
            console.log("Something went wrong")
    }
}

function test2(){
    const student = new Student("Taylor", 7, 10)
    const percent = Calculate(student.completedItems, student.totalItems) * 100
    switch(percent){
        case percent >= 90:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: On Track
                `)
            break
        case percent >=70 && percent <=89:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: Making Progress
                `)
            break
        case percent >= 69:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: Needs Attention
                `)
            break
        default:
            console.log("Something went wrong")
    }
}

function test3(){
    const student = new Student("Taylor", 4, 10)
    const percent = Calculate(student.completedItems, student.totalItems) * 100
    switch(percent){
        case percent >= 90:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: On Track
                `)
            break
        case percent >=70 && percent <=89:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: Making Progress
                `)
            break
        case percent >= 69:
            console.log(`
                Student: ${student.name}\n
                Completed: ${student.completedItems}\n
                Total: ${student.totalItems}\n
                Expected percentage: ${percent}\n
                Expected status: Needs Attention
                `)
            break
        default:
            console.log("Something went wrong")
    }
}

console.log("\n--- test 1 ---\n")
test1()
console.log("\n--- test 2 ---\n")
test2()
console.log("\n--- test 3 ---\n")
test3()