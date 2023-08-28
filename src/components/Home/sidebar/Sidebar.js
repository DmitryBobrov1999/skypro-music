import React from 'react';
import { SidebarSkeleton } from '../SkeletonCard.js';
import * as S from './Sidebar.styles';
import { NavLink } from 'react-router-dom';
import { categoryMock } from '../../../pages/category/CategoryMock.js';

export default function CreateSidebar({ isLoading }) {
	return (
		<S.MainSidebar>
			<S.SidebarPersonal>
				<S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
				<S.SidebarIcon>
					<svg alt='logout'>
						<use xlinkHref='img/icon/sprite.svg#logout' />
					</svg>
				</S.SidebarIcon>
			</S.SidebarPersonal>
			<S.SidebarBlock>
				<S.SidebarList>
					{categoryMock.map(track => (
						<S.SidebarItem key={track.id}>
							<S.SidebarLink>
								{isLoading ? (
									<NavLink to={`/category/${track.id}`}>
										<S.SidebarImg
											src={track.img}
											
										/>
									</NavLink>
								) : (
									<SidebarSkeleton />
								)}
							</S.SidebarLink>
						</S.SidebarItem>
					))}
					
				</S.SidebarList>
			</S.SidebarBlock>
		</S.MainSidebar>
	);
}
