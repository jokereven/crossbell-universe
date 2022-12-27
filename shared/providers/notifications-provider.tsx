import React, { PropsWithChildren } from "react";
import { NotificationsProvider as MantineNotificationsProvider } from "@mantine/notifications";

export function NotificationsProvider({ children }: PropsWithChildren) {
	return (
		<MantineNotificationsProvider position="bottom-center" zIndex={99999}>
			{children}
		</MantineNotificationsProvider>
	);
}