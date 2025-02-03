import { authHandlers } from './auth';
import { stocksHandlers } from './stocks';

export const handlers = [...authHandlers, ...stocksHandlers];
