import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

interface Props {
	value: string | null
	onChange: (value: string | null) => void
	data: string[]
	entityName?: string
}

export function FilterSearchSelect({
	data,
	onChange,
	value,
	entityName
}: Props) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={isOpen}
					className='w-full justify-between'
				>
					{value
						? data.find(item => item === value)
						: `Select ${entityName}...`}
					<ChevronsUpDown className='opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-full p-0'>
				<Command>
					<CommandInput
						placeholder={`Select ${entityName}...`}
						className='h-9'
					/>
					<CommandList>
						<CommandEmpty>No {entityName} found.</CommandEmpty>
						<CommandGroup>
							<CommandItem
								value='all'
								onSelect={() => {
									onChange(null)
									setIsOpen(false)
								}}
							>
								All
							</CommandItem>
							{data.map(item => (
								<CommandItem
									key={item}
									value={item}
									onSelect={currentValue => {
										onChange(currentValue)
										setIsOpen(false)
									}}
								>
									{item}
									<Check
										className={cn(
											'ml-auto',
											value === item ? 'opacity-100' : 'opacity-0'
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
