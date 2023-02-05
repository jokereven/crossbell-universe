import React from "react";

import { TransferCSBSuccess as Main } from "../../../../components";
import { useOpSignBalance } from "../../../../hooks";

import { Header } from "../../components";
import { useCsbDetailModal } from "../../stores";

import styles from "./index.module.css";

export function TransferSuccess() {
	const balance = useOpSignBalance();
	const hide = useCsbDetailModal((s) => s.hide);

	return (
		<div className={styles.container}>
			<Header title="Transfer Success" />
			<Main
				balance={balance?.formatted}
				balanceTips="Your operator balance:"
				onClickMainBtn={hide}
			/>
		</div>
	);
}
