import { Button } from ".";

const Stories = {
    title: "Button",
    component: Button,
}

export default Stories

export const Default = () => <Button>Default Button</Button>

export const Primary = () => <Button type="primary">Primary Button</Button>

export const Ghost = () => <Button type="ghost">Ghost Button</Button>

export const Small = () => <Button size="sm">Small Button</Button>
