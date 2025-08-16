import { type Repository } from "@/utils/types";
import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
} from "recharts";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { calculateMostForkedRepos } from "@/utils/utils";

const ForkedRepos = ({
	repositories,
}: {
	repositories: Repository[];
}) => {
	// Calculate most forked repositories and return array of {repo: string, count: number}
	const mostForkedRepos =
		calculateMostForkedRepos(repositories);

	// Define chart configuration for styling and labels
	const chartConfig = {
		repo: {
			label: "Repository",
			color: "#facd12",
		},
	} satisfies ChartConfig;

	return (
		<div>
			<h2 className="text-2xl font-semibold text-center mb-4">
				Forked Repos
			</h2>
			{/* ChartContainer handles responsive sizing and theme variables */}
			<ChartContainer
				config={chartConfig}
				className="h-100 w-full"
			>
				<BarChart accessibilityLayer data={mostForkedRepos}>
					{/* CartesianGrid adds background gridlines, vertical lines disabled */}
					<CartesianGrid vertical={false} />

					<XAxis
						dataKey="repo"
						tickLine={true} // Shows small lines at each tick mark
						tickMargin={10} // Space between tick line and label
						axisLine={false} // Hides the main axis line
						tickFormatter={(value) => value.slice(0, 10)} // Truncates long repo names
					/>

					<YAxis dataKey="count" />

					<ChartTooltip content={<ChartTooltipContent />} />

					<Bar
						dataKey="count"
						fill="var(--color-repo)"
						radius={4}
					/>
				</BarChart>
			</ChartContainer>
		</div>
	);
};

export default ForkedRepos;
