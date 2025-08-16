import { Skeleton } from "../ui/skeleton";

const Loading = () => {
	return (
		<div>
			<Skeleton className="h-[194px] w-full lg:w-1/2 mb-8 rounded " />
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
				<Skeleton className=" h-[70px] rounded" />
				<Skeleton className=" h-[70px] rounded" />
				<Skeleton className=" h-[70px] rounded" />
				<Skeleton className=" h-[70px] rounded" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8 ">
				<Skeleton className="h-100 w-full rounded" />
				<Skeleton className="h-100 w-full rounded" />
				<Skeleton className=" h-100 w-full rounded" />
			</div>
		</div>
	);
};
export default Loading;
