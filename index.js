// Write your solution in this file!
const  employee = {
    Name: 'Tom',
    streetAddress: '121'
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const EmployeeMew = {...employee}
    EmployeeMew[key] = value;
    return EmployeeMew
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function  deleteFromEmployeeByKey(employee,key){
    const Object2 = Object.assign({},employee)
    delete Object2[key]
    return Object2
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
