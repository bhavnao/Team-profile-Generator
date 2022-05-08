const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Can set school to the Intern", () => {
    const testValue = "GA Tech";
    const e = new Intern("Tom", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Tom", 1, "test@test.com", 123);
    expect(e.getRole()).toBe(testValue);
  });

  test('getSchool() should return the school name', () => {
      const testValue = "GA Tech";
      const e = new Intern("Tom", 1, "test@test.com", "GA Tech");
      expect(e.getSchool()).toBe(testValue);
  });