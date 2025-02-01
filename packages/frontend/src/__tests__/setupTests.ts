import { afterEach } from 'vitest';
import { worker } from '@/mocks/browser';

afterEach(() => worker.resetHandlers());
