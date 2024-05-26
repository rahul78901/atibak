import useMusicStore from './store';
import usePlayerStore from './store/player';

const { getState, setState } = usePlayerStore;

const { getState: getMusicState, setState: setMusicState } = useMusicStore;
const onBackPressed = (): boolean => {
  const { isPlayListOpened, miniPlayer } = getState();
  if (isPlayListOpened) {
    setState({
      isPlayListOpened: false,
    });
    return false;
  }

  if (!miniPlayer) {
    setState({
      miniPlayer: true,
    });
    return false;
  }

  const { id } = getMusicState();

  if (id) {
    setMusicState({
      id: null,
    });
    return false;
  }

  return true;
};

export default onBackPressed;
