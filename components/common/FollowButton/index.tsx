import { Button, ButtonProps } from "@mantine/core";
import { useModals } from "@mantine/modals";
import { CharacterEntity } from "crossbell.js";

import { useCharacterFollowRelation } from "@/utils/apis/indexer";
import {
	useAccountCharacter,
	useFollowCharacter,
	useUnfollowCharacter,
} from "@/components/connectkit";

export default function FollowButton({
	character,
	...props
}: {
	character: CharacterEntity;
} & ButtonProps) {
	const { data: currentCharacter } = useAccountCharacter();

	const isSelf = currentCharacter?.characterId === character.characterId;

	const { data: followRelation, isLoadingFollowRelation } =
		useCharacterFollowRelation(
			currentCharacter?.characterId,
			character?.characterId
		);

	const follow = useFollowCharacter();
	const unfollow = useUnfollowCharacter();

	const modals = useModals();
	const handleFollow = () => follow.mutate(character);
	const handleUnfollow = () => {
		modals.openConfirmModal({
			title: `Unfollow @${character.handle}?`,
			children:
				"Their activities will no longer show up in your home timeline. You can still view their profile. ",
			labels: { confirm: "Unfollow", cancel: "Cancel" },
			confirmProps: { color: "red" },
			onConfirm: () => unfollow.mutate(character),
		});
	};

	return isSelf ? (
		<></>
	) : (
		<div className="flex w-24" onClick={(e) => e.stopPropagation()}>
			{isLoadingFollowRelation ? (
				<Button radius={"md"} fullWidth p={0} color="dark" loading {...props}>
					Follow
				</Button>
			) : followRelation?.isFollowing ? (
				<Button
					radius="md"
					fullWidth
					p={0}
					variant="outline"
					color="dark"
					loading={unfollow.isLoading}
					onClick={handleUnfollow}
					{...props}
				>
					Following
				</Button>
			) : (
				<Button
					radius="md"
					fullWidth
					p={0}
					color="dark"
					loading={follow.isLoading}
					onClick={handleFollow}
					{...props}
				>
					Follow
				</Button>
			)}
		</div>
	);
}
