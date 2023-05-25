import FilterButton from './FilterButton';
import totalIcon from '../../asset/img/total.png';

export default {
  title: 'Common/FilterButton',
  component: FilterButton,
};

const Template = (args) => <FilterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Total',
  img: totalIcon,
  text: '전체',
  isSelected: false,
};
