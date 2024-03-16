import { Box, Button, Container, CssBaseline, Grid, Hidden, useTheme } from '@mui/material';
import PageHeader from '../pageHeader/PageHeader';
import NavMenu from '../navigationMenu/navMenu';
import BottomNavMenu from '../navigationMenu/bottomNavMenu';

interface Props {
	children?: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children }) => {
	const Theme = useTheme();

	return (
		<Box minHeight='100vh'>
			<CssBaseline />
			<PageHeader />
			<Hidden lgDown>
				<NavMenu />
			</Hidden>
			<Hidden lgUp>
				<BottomNavMenu />
			</Hidden>

			<Box
				style={{
					paddingTop: '125px',
					paddingBottom: '125px',
					backgroundColor: Theme.palette.background.default,
				}}
			>
				<Container maxWidth='lg' style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
					{children}
				</Container>
			</Box>
		</Box>
	);
};

export default BaseLayout;
