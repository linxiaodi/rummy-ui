import React from 'react';
import { Layout } from 'rummy-ui';

const { Header, Footer, Content, Sider } = Layout;

const Basic = () => {
	return (
		<div className="ru-example-layout">
			<Layout>
				<Header>header</Header>
				<Content>content</Content>
				<Footer>footer</Footer>
			</Layout>

			<Layout>
				<Header>Header</Header>
				<Layout>
					<Sider>Sider</Sider>
					<Content>Content</Content>
				</Layout>
				<Footer>Footer</Footer>
			</Layout>

			<Layout>
				<Header>Header</Header>
				<Layout>
					<Content>Content</Content>
					<Sider>Sider</Sider>
				</Layout>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	);
};

export default Basic;
