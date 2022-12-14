import React from 'react'
import s from './PageEdit.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import {BaseFont} from '@common/components/BaseFont/BaseFont'
import BaseSelect from '@common/components/BaseSelect/BaseSelect'
import BaseTextInput from '@common/components/BaseTextInput/BaseTextInput'
import {BaseButton} from '@common/components/BaseButton/BaseButton'
import {ReactComponent as SaveIcon} from '@assets/svg/save.svg'

const PageEdit = () => {

	const status_input = {
		placeholder: 'Select your variant',
		label: 'Status:',
		variants: [
			{
				name: 'Published',
				value: 'published'
			},
			{
				name: 'Hidden',
				value: 'hidden'
			},
			{
				name: 'Unpublished',
				value: 'unpublished'
			},
			{
				name: 'Draft',
				value: 'draft'
			}
		],
		defaultValue: {
			name: 'Published',
			value: 'published'
		}
	}

	const path_input = {
		placeholder: '/homepage',
		label: 'Path:',
		defaultValue: '/about'
	}

	const name_input = {
		placeholder: 'Home',
		label: 'Name:',
		defaultValue: 'Home'
	}

	return (
		<div className={s.page_edit}>
			<BaseContainer>
				<div className={s.page_edit_inner}>
					<BaseFont tag={'h1'}>Edit page</BaseFont>
					<div className={s.page_edit_form}>
						<BaseTextInput input={name_input}/>
						<BaseTextInput input={path_input}/>
						<BaseSelect input={status_input}/>
					</div>
				</div>
			</BaseContainer>
			<div className="fixed-btn-wrapper">
				<BaseButton type={'primary'} icon={SaveIcon}>Save</BaseButton>
			</div>
		</div>
	)
}

export default PageEdit