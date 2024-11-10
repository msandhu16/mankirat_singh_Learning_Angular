import { AnimalGenderPipe } from './animal-gender.pipe';

describe('AnimalGenderPipe', () => {
  it('create an instance', () => {
    const pipe = new AnimalGenderPipe();
    expect(pipe).toBeTruthy();
  });
});
