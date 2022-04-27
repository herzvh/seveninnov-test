import TimeSlotBanner from '../../components/TimeSlotBanner'

export default {
    title: 'TimeSlotBanner',
    component: TimeSlotBanner,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
    }
}

const Template = (args, { argTypes }) => ({
    components: { TimeSlotBanner },
    props: Object.keys(argTypes),
    template: '<time-slot-banner v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = { beginAt: '2022-04-22', endAt: '2022-04-22' };