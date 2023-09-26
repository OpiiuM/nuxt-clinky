import { ResponceStatus } from '@/enums';

interface IResponce {
	data: Record<string, unknown>;
	status: `${ResponceStatus}`;
}

interface IResponceSuccess extends IResponce {
	data: Record<string, unknown>;
	status: ResponceStatus.Success;
}

interface IResponceError extends IResponce {
	data: Record<string, unknown>;
	status: ResponceStatus.Error;
	message: string;
}

export type TResponce = Promise<IResponceSuccess | IResponceError>;

export interface IRequest {
	$get(): TResponce;
	$post(): TResponce;
	$put(): TResponce;
	$delete(): TResponce;
}
