import React from 'react';
import Menu from 'src/components/Menu';

// demo start
const Demo = () => (
    <div>
        <div className="demo-wrap">
            <Menu multiple collapseProps={{ defaultOpenKeys: ['1', '2'] }} onChange={console.log}>
                <Menu.Item itemKey="1">Menu 1</Menu.Item>
                <Menu.SubMenu subMenuKey="1" title={'SubMenu 1'}>
                    <Menu.Item itemKey="1-1">Menu 1</Menu.Item>
                    <Menu.Item itemKey="1-2">Menu 2</Menu.Item>
                    <Menu.Item itemKey="1-3">Menu 3</Menu.Item>
                    <Menu.Item itemKey="1-4">Menu 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu subMenuKey="2" title={'SubMenu 2'}>
                    <Menu.Item itemKey="2-1">Menu 1</Menu.Item>
                    <Menu.Item itemKey="2-2">Menu 2</Menu.Item>
                    <Menu.Item itemKey="2-3">Menu 3</Menu.Item>
                    <Menu.Item itemKey="2-4">Menu 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title={'SubMenu 3'}>
                    <Menu.Item itemKey="3-1">Menu 1</Menu.Item>
                    <Menu.Item itemKey="3-2">Menu 2</Menu.Item>
                    <Menu.Item itemKey="3-3">Menu 3</Menu.Item>
                    <Menu.Item itemKey="3-4">Menu 4</Menu.Item>

                    <Menu.SubMenu title={'SubMenu 3-1'} styleType={'popover'}>
                        <Menu.Item itemKey="3-1-1">Menu 1</Menu.Item>
                        <Menu.Item itemKey="3-1-2">Menu 2</Menu.Item>
                        <Menu.Item itemKey="3-1-3">Menu 3</Menu.Item>
                        <Menu.Item itemKey="3-1-4">Menu 4</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </div>
        <div className="demo-wrap">
            <Menu multiple onChange={console.log}>
                <Menu.Item itemKey="1">Menu 1</Menu.Item>
                <Menu.SubMenu subMenuKey="1" title={'SubMenu 1'}>
                    <Menu.Item itemKey="1-1">Menu 1</Menu.Item>
                    <Menu.Item itemKey="1-2">Menu 2</Menu.Item>
                    <Menu.Item itemKey="1-3">Menu 3</Menu.Item>
                    <Menu.Item itemKey="1-4">Menu 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu subMenuKey="2" title={'SubMenu 2'}>
                    <Menu.Item itemKey="2-1">Menu 1</Menu.Item>
                    <Menu.Item itemKey="2-2">Menu 2</Menu.Item>
                    <Menu.Item itemKey="2-3">Menu 3</Menu.Item>
                    <Menu.Item itemKey="2-4">Menu 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu title={'SubMenu 3'}>
                    <Menu.Item itemKey="3-1">Menu 1</Menu.Item>
                    <Menu.Item itemKey="3-2">Menu 2</Menu.Item>
                    <Menu.Item itemKey="3-3">Menu 3</Menu.Item>
                    <Menu.Item itemKey="3-4">Menu 4</Menu.Item>

                    <Menu.SubMenu title={'SubMenu 3-1'} styleType={'popover'}>
                        <Menu.Item itemKey="3-1-1">Menu 1</Menu.Item>
                        <Menu.Item itemKey="3-1-2">Menu 2</Menu.Item>
                        <Menu.Item itemKey="3-1-3">Menu 3</Menu.Item>
                        <Menu.Item itemKey="3-1-4">Menu 4</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </div>
    </div>
);
// demo end

export default Demo;
