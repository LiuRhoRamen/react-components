import React from 'react';

import Input from 'src/components/Input';
import Calendar from 'src/components/Calendar';
import Popover from 'src/components/Popover';
import Notice from 'src/components/Notice';
import SvgIcon from 'src/components/SvgIcon';
import usePopoverConfig from 'src/hooks/usePopoverConfig';

import { PickerContainer, SPopup } from './style';
import Footer from './Footer';
import usePicker from './usePicker';
import { formatToShort } from './utils';
import { DatePickerProps } from './DatePicker';

export const displayToFormatAndTimeMode = (display: DatePickerProps['display']): [string[]] => {
    let format = 'YYYY-MM';
    if (display) {
        if (display.date && display.date.format) {
            format = display.date.format;
        }
    }
    return [[format, formatToShort(format)]];
};

/**
 * @deprecated 请使用 ```<DatePicker type='month' />``` 替换
 */
const Month = (props: DatePickerProps) => {
    const [inputProps, containerProps, popoverProps, popupProps, calendarProps, , footerProps, { error }] = usePicker<
        DatePickerProps['display']
    >(props, displayToFormatAndTimeMode, 'month');
    const popoverConfigProps = usePopoverConfig();

    return (
        <PickerContainer isMonth {...containerProps}>
            <Popover
                popup={
                    <SPopup {...popupProps}>
                        <Calendar.Month {...calendarProps} />
                        {error && (
                            <Notice styleType="error" closable={false}>
                                {error}
                            </Notice>
                        )}
                        <Footer {...footerProps} />
                    </SPopup>
                }
                {...popoverConfigProps}
                {...popoverProps}
            >
                <Input {...inputProps} prefix={<SvgIcon type="calendar" />} />
            </Popover>
        </PickerContainer>
    );
};

export default React.memo(Month);
