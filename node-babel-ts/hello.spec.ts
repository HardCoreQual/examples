import {getText} from "./hello";

it('should coincide texts', function () {
  expect(getText()).toBe('hello-babel-jest-ts');
});
