import {fieldValidation} from './fieldValidation'; // Update with the correct path
import {validate} from './validate';

// Mock the validate function
jest.mock('./validate', () => ({
  validate: jest.fn(),
}));

describe('fieldValidation', () => {
  it('should return validation errors for a specific field', async () => {
    const values = {username: 'testuser', email: 'test@example.com'};
    const field = 'email';
    const validationSchema = {email: 'Email validation schema'};
    const expectedError = {email: 'Email validation error'};

    // Mock the validate function to return the error for the specified field
    (validate as jest.Mock).mockResolvedValueOnce(expectedError);

    const result = await fieldValidation({values, field, validationSchema});

    expect(result).toEqual(expectedError);
  });

  it('should return undefined when there are no validation errors', async () => {
    const values = {username: 'testuser', email: 'test@example.com'};
    const field = 'username';
    const validationSchema = {username: 'Username validation schema'};

    // Mock the validate function to return undefined (no errors)
    (validate as jest.Mock).mockResolvedValueOnce(undefined);

    const result = await fieldValidation({values, field, validationSchema});

    expect(result).toBeUndefined();
  });
});
