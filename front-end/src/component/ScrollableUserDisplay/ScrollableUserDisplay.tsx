import { Avatar, Box, CircularProgress, Grid, IconButton, Modal, Typography, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useRef } from 'react';
import { UserModel } from '../../model';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../type/AppRoute';

interface Props {
	minWidth?: string;
	maxWidth?: string;
	minHeight?: string;
	maxHeight?: string;
	my?: string;
	mx?: string;
	title?: string;
	users: UserModel[];
	open: boolean;
	isLoading: boolean;
	disabled: boolean;
	modalType: string;
	handleClose: () => void;
	handleScroll: () => void;
}

const ScrollableUserDisplay: React.FC<Props> = (props) => {
	const Theme = useTheme();
	const Navigate = useNavigate();

	const { username } = useParams<'username'>();

	const modalContentRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (!props.isLoading && !props.disabled) {
			const scrollTop = modalContentRef.current?.scrollTop || 0;
			const clientHeight = modalContentRef.current?.clientHeight || 0;
			const scrollHeight = modalContentRef.current?.scrollHeight || 0;
			if (scrollTop + clientHeight === scrollHeight) {
				props.handleScroll();
			}
		}
	};

	function handleProfileClick(username: string) {
		Navigate(`${AppRoute.PROFILE}/${username}`);
	}

	return (
		<Modal
			open={props.open}
			onClose={props.handleClose}
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Box
				minWidth={props.minWidth}
				maxWidth={props.maxWidth}
				minHeight={props.minHeight}
				maxHeight={props.maxHeight}
				mx={props.mx}
				width={'100%'}
				height={'100%'}
			>
				<Box
					sx={{
						border: `1px solid ${Theme.palette.text.secondary}`,
						borderRadius: '30px 30px 0 0',
						padding: '4%',
						backgroundColor: Theme.palette.background.default,
					}}
				>
					<Grid container direction={'row'} alignItems={'center'}>
						<Grid item xs={7.75}>
							<Typography style={{ fontSize: '1.4rem', fontWeight: 500 }} textAlign='right'>
								{props.title}
							</Typography>
						</Grid>
						<Grid item xs={4.25} textAlign='right'>
							<IconButton onClick={props.handleClose} id='close-modal-button'>
								<CloseIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Box>
				<Box
					sx={{
						overflowY: 'scroll',
						height: '90%',
						border: `1px solid ${Theme.palette.text.secondary}`,
						borderRadius: '0 0 30px 30px',
						py: '4%',
						px: '4%',
						backgroundColor: Theme.palette.background.default,
					}}
					onScroll={handleScroll}
					ref={modalContentRef}
				>
					<Grid container direction={'column'} alignItems={'center'}>
						{props.disabled && props.users.length === 0 && (
							<Typography sx={{ textAlign: 'center', color: Theme.palette.text.secondary, paddingTop: '1em' }}>
								{props.modalType === 'followers' && `@${username} does not have any followers.`}
								{props.modalType === 'following' && `@${username} isn't following anyone yet.`}
							</Typography>
						)}
						{props.users.map((user) => (
							<Grid
								container
								direction={'row'}
								columnGap={'2vw'}
								key={user.id}
								alignItems={'center'}
								px={'4%'}
								py={'4%'}
								borderRadius={'20px'}
								sx={{
									':hover': {
										cursor: 'pointer',
										backgroundColor: Theme.palette.action.hover,
									},
								}}
								onClick={() => handleProfileClick(user.username)}
							>
								<Grid item>
									<Avatar
										src={user.picture}
										sx={{
											backgroundColor: Theme.palette.background.default,
										}}
									/>
								</Grid>
								<Grid item>
									<Typography>{user.name}</Typography>
									<Typography fontWeight={'bold'}>@{user.username}</Typography>
								</Grid>
							</Grid>
						))}
						{props.isLoading && <CircularProgress />}
					</Grid>
				</Box>
			</Box>
		</Modal>
	);
};

export default ScrollableUserDisplay;
