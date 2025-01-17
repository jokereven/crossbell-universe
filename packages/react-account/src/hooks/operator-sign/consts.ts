import { CharacterPermissionKey } from "crossbell";

export const OP_SIGN_OPERATOR_PERMISSIONS: CharacterPermissionKey[] = [
	"SET_CHARACTER_URI",
	"SET_LINKLIST_URI",
	"LINK_CHARACTER",
	"UNLINK_CHARACTER",
	"CREATE_THEN_LINK_CHARACTER",
	"LINK_NOTE",
	"UNLINK_NOTE",
	"LINK_ERC721",
	"UNLINK_ERC721",
	"LINK_ADDRESS",
	"UNLINK_ADDRESS",
	"LINK_ANY_URI",
	"UNLINK_ANY_URI",
	"LINK_LINKLIST",
	"UNLINK_LINKLIST",
	"SET_LINK_MODULE_FOR_CHARACTER",
	"SET_LINK_MODULE_FOR_NOTE",
	"SET_LINK_MODULE_FOR_LINKLIST",
	"SET_MINT_MODULE_FOR_NOTE",
	"SET_NOTE_URI",
	"LOCK_NOTE",
	"DELETE_NOTE",
	"POST_NOTE_FOR_CHARACTER",
	"POST_NOTE_FOR_ADDRESS",
	"POST_NOTE_FOR_LINKLIST",
	"POST_NOTE_FOR_NOTE",
	"POST_NOTE_FOR_ERC721",
	"POST_NOTE_FOR_ANY_URI",
	"POST_NOTE",
];

export const OP_SIGN_OPERATOR_ADDRESS =
	"0xbbc2918c9003d264c25ecae45b44a846702c0e7c";
