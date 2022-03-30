import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
	
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
	
	describe('actions', () => {
		it('login', () => {
			const user = { email: 'ltd@hotmail.com', password: 454545 };
			const data = { type: LOGIN, user };
			const result = login(user.email, user.password);
			expect(result).toEqual(data);
		});
	
		it('logout', () => {
			const data = { type: LOGOUT };
			const result = logout();
			expect(result).toEqual(data);
		});
	
		it('displayNotificationDrawer', () => {
			const data = { type: DISPLAY_NOTIFICATION_DRAWER };
			const result = displayNotificationDrawer();
			expect(result).toEqual(data);
		});
	
		it('hideNotificationDrawer', () => {
			const data = { type: HIDE_NOTIFICATION_DRAWER };
			const result = hideNotificationDrawer();
			expect(result).toEqual(data);
		});
	});
