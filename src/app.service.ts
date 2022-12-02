import { Injectable } from '@nestjs/common';

const sleep = async (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const functionThatThrows = async (): Promise<void> => {
  await sleep(2000);
  throw new Error('this will crash the app');
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public async crash(): Promise<void> {
    console.log('crashing the app in 3 seconds...');
    await sleep(1000);
    functionThatThrows();
  }
}
