import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import b7svg from '../../svgs/b7.svg';

type Props = {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container onClick={onClick}>
      {item.permanentShown === false && item.shown === false &&
        <C.Icon src={b7svg} alt="" />
      }
    </C.Container>
  );
}