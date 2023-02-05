import { NoteLinkType, SCOPE_KEY_NOTE_STATUS } from "@crossbell/indexer";

import { unlinkNote, siweUnlinkNote } from "../../apis";
import {
	createAccountTypeBasedMutationHooks,
	AccountTypeBasedMutationOptions,
} from "../account-type-based-hooks";

export type UseUnlinkNoteOptions = AccountTypeBasedMutationOptions<
	typeof useUnlinkNote
>;

export const useUnlinkNote = createAccountTypeBasedMutationHooks<
	NoteLinkType,
	{ characterId: number; noteId: number },
	boolean
>(
	{
		actionDesc: "unlinking note",
		withParams: true,
	},
	(linkType) => ({
		async email({ characterId, noteId }, { account }) {
			await unlinkNote({
				token: account.token,
				toCharacterId: characterId,
				toNoteId: noteId,
				linkType: linkType,
			});

			return true;
		},

		async contract({ noteId, characterId }, { account, siwe, contract }) {
			if (account.characterId) {
				if (siwe) {
					await siweUnlinkNote({
						siwe,
						characterId: account.characterId,
						toCharacterId: characterId,
						toNoteId: noteId,
						linkType: linkType,
					});
				} else {
					await contract.unlinkNote(
						account.characterId,
						characterId,
						noteId,
						linkType
					);
				}

				return true;
			} else {
				return false;
			}
		},

		onSuccess({ variables, queryClient }) {
			const { characterId, noteId } = variables;

			return queryClient.invalidateQueries(
				SCOPE_KEY_NOTE_STATUS(characterId, noteId)
			);
		},
	})
);
