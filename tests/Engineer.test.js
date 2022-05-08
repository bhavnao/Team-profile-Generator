const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set github to the Engineer", () => {
    const testValue = "gitUser";
    const e = new Engineer("Tom", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });
  
  test('getRole() should return "Engineer"', () => {
    const testValue = "Engineer";
    const e = new Engineer("Tom", 1, "test@test.com", 123);
    expect(e.getRole()).toBe(testValue);
  });

  test('getGithub() should return the github user name', () => {
      const testValue = "gitUser";
      const e = new Engineer("Tom", 1, "test@test.com", "gitUser");
      expect(e.getGithub()).toBe(testValue);
  });