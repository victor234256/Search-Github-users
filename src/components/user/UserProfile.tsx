import { GET_USER } from "@/queries";
import type { UserData } from "@/utils/types";
import { useQuery } from "@apollo/client";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";
import ForkedRepos from "../charts/ForkedRepos";
import UsedLanguages from "../charts/UsedLanguages";
import PopularRepos from "../charts/PopularRepos";
import Loading from "./Loading";

const UserProfile = ({
	userName,
}: {
	userName: string;
}) => {
	const { data, loading, error } = useQuery<UserData>(
		GET_USER,
		{
			variables: { login: userName },
		},
	);

	if (loading) return <Loading />;
	if (error)
		return <div className="text-xl">{error.message}</div>;
	if (!data)
		return <h2 className="text-xl">User Not Found.</h2>;

	const {
		avatarUrl,
		name,
		bio,
		url,
		repositories,
		followers,
		following,
		gists,
	} = data.user;
	return (
		<div>
			<UserCard
				avatarUrl={avatarUrl}
				name={name}
				bio={bio}
				url={url}
			/>
			<StatsContainer
				totalRepos={repositories.totalCount}
				followers={followers.totalCount}
				following={following.totalCount}
				gists={gists.totalCount}
			/>

			{repositories.totalCount > 0 && (
				<div className="grid md:grid-cols-2 gap-2">
					<UsedLanguages
						repositories={repositories.nodes}
					/>
					<PopularRepos repositories={repositories.nodes} />
					<ForkedRepos repositories={repositories.nodes} />
				</div>
			)}
		</div>
	);
};
export default UserProfile;
