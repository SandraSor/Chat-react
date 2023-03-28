import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, IconReaded, Avatar } from '../';
import { convertTime } from '../../utils/helpers';

import data from '@emoji-mart/data';
import { init } from 'emoji-mart';

import './Message.scss';

import audioWave from '../../assets/img/AudioWave.svg';
// import playSvg from '../../assets/img/play.svg';
// import pauseSvg from '../../assets/img/pause.svg';
import playSvg from '../../assets/img/play2.svg';
import pauseSvg from '../../assets/img/pause2.svg';
// import repeatSvg from '../../assets/img/repeat.svg';

init({ data });
const Message = ({
	avatar,
	user,
	text,
	date,
	created_at,
	isMe,
	isRead,
	attachments,
	audio,
	isTyping,
}) => {
	const [isPlay, setIsPlay] = React.useState(false);
	const [duration, setDuration] = React.useState(0);
	const [percentage, setPercentage] = React.useState(0);
	const [currentTime, setCurrentTime] = React.useState(0);
	const audioRef = React.useRef(null);
	const isMounted = React.useRef(false);
	// const isEnded = React.useRef(false);

	const togglePlay = () => {
		audioRef.current.volume = '0.1';
		if (isPlay) {
			audioRef.current.pause();
			setIsPlay(false);
		} else {
			audioRef.current.play();
			setIsPlay(true);
		}
		isMounted.current = true;
	};

	const getCurrentDuration = () => {
		const duration = (audioRef.current && audioRef.current.duration) || 0;
		setCurrentTime(audioRef.current.currentTime);
		setPercentage((audioRef.current.currentTime / duration) * 100);
	};

	const onEndedAudio = () => {
		setIsPlay(false);
		setPercentage(0);
		setCurrentTime(0);
		isMounted.current = false;
	};

	// React.useEffect(() => {
	// 	if (isMounted.current) {
	// 		setPercentage((+(currentTime / duration) * 100).toFixed(2));
	// 		if (currentTime === duration) {
	// 			setIsPlay(false);
	// 			// setCurrentTime(0);
	// 		}
	// 	}
	// }, [currentTime, duration]);

	return (
		<div
			className={classNames('message', {
				'message--isme': isMe,
				'message--is-typing': isTyping,
				'message--is-audio': audio,
				'message--image': attachments && attachments.length === 1,
			})}
		>
			<div className='message__content'>
				<div className='message__avatar'>
					<Avatar user={user} />

					{/* <img src={avatar} alt={`Avatar ${user.fullName}`} /> */}
				</div>
				<div className='message__info'>
					{(audio || text || isTyping) && (
						<div className='message__bubble'>
							{text && (
								<p className='message__text'>
									{text}
									<em-emoji shortcodes=':+1::skin-tone-1:'></em-emoji>
								</p>
							)}
							{isTyping && (
								<div className='message__typing'>
									<span />
									<span />
									<span />
								</div>
							)}
							{audio && (
								<div className='message__audio'>
									<audio
										ref={audioRef}
										src={audio}
										onLoadedData={(event) => {
											// setDuration(event.currentTarget.duration);
											setDuration(event.currentTarget.duration.toFixed(2));
										}}
										onTimeUpdate={getCurrentDuration}
										// onTimeUpdate={(event) => {
										// 	setCurrentTime(event.currentTarget.currentTime);
										// }}
										onEnded={onEndedAudio}
										preload='auto'
									></audio>
									<div
										className='message__audio-progress'
										style={{ width: percentage + '%' }}
									></div>
									<div className='message__audio-info'>
										<div className='message__audio-info-btn'>
											<button onClick={togglePlay}>
												<img
													src={isPlay ? pauseSvg : playSvg}
													alt='Audio Svg'
												/>
											</button>
										</div>
										<div className='message__audio-info-wave'>
											<img src={audioWave} alt='Audio Wave' />
										</div>
										<span className='message__audio-info-time'>
											{isPlay || isMounted.current
												? convertTime(currentTime)
												: duration
												? convertTime(duration)
												: ''}
										</span>
									</div>
								</div>
							)}
						</div>
					)}
					{attachments && (
						<div className='message__attachments'>
							{attachments.map((item, index) => (
								<div key={index} className='message__attachments--item'>
									<img src={item.url} alt={item.fileName} />
								</div>
							))}
						</div>
					)}

					{created_at && (
						<span className='message__date'>
							<Time date={created_at} />
						</span>
					)}
					{/* {date && (
						<span className='message__date'>
							<Time date={date} />
						</span>
					)} */}
				</div>
				<IconReaded isMe={isMe} isRead={isRead} />
			</div>
		</div>
	);
};

Message.defaultProps = {
	user: {},
};

Message.prototype = {
	avatar: PropTypes.string,
	user: PropTypes.object,
	text: PropTypes.string,
	audio: PropTypes.string,
	date: PropTypes.string,
	attachments: PropTypes.array,
	isTyping: PropTypes.bool,
	isMe: PropTypes.bool,
	isRead: PropTypes.bool,
};

export default Message;
