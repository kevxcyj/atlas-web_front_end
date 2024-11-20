function createClassRoom(numbersOfStudents) {
    function studentSeat(seatNumber) {
      return function() {
        return seatNumber;
      };
    }
  
    let students = [];
  
    for (let i = 0; i <= numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  let classRoom = createClassRoom(10);
  
  console.log(classRoom);
