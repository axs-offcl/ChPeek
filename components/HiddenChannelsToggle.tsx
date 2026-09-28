/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { classes } from "@utils/misc";
import { Tooltip } from "@webpack/common";

import { cl, settings, toggleHiddenChannelsVisibility } from "..";

const VisibleIconPath = "M12 9c1.5 0 2.75 1.25 2.75 2.75S13.5 14.5 12 14.5 9.25 13.25 9.25 12 10.5 9 12 9m0-4.5C6.5 4.5 2.73 7.61 1 12c1.73 4.39 5.5 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-5.5-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z";
const HiddenIconPath = "m19.8 22.6-4.2-4.15q-.875.275-1.762.413Q12.95 19 12 19q-3.775 0-6.725-2.087Q2.325 14.825 1 11.5q.525-1.325 1.325-2.463Q3.125 7.9 4.15 7L1.4 4.2l1.4-1.4 18.4 18.4ZM12 16q.275 0 .512-.025.238-.025.513-.1l-5.4-5.4q-.075.275-.1.513-.025.237-.025.512 0 1.875 1.312 3.188Q10.125 16 12 16Zm7.3.45-3.175-3.15q.175-.425.275-.862.1-.438.1-.938 0-1.875-1.312-3.188Q13.875 7 12 7q-.5 0-.938.1-.437.1-.862.3L7.65 4.85q1.025-.425 2.1-.638Q10.825 4 12 4q3.775 0 6.725 2.087Q21.675 8.175 23 11.5q-.575 1.475-1.512 2.738Q20.55 15.5 19.3 16.45Zm-4.625-4.6-3-3q.7-.125 1.288.112.587.238 1.012.688.425.45.613 1.038.187.587.087 1.162Z";

export default function HiddenChannelsToggle() {
    const { showHiddenChannels, showHeaderButton } = settings.use(["showHiddenChannels", "showHeaderButton"]);

    if (!showHeaderButton) return null;

    return (
        <Tooltip text={showHiddenChannels ? "Hide hidden channels" : "Peek at hidden channels"}>
            {({ onMouseEnter, onMouseLeave }) => (
                <div
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle hidden channels"
                    className={classes(cl("toggle-btn"), !showHiddenChannels && cl("toggle-btn-inactive"))}
                    onClick={toggleHiddenChannelsVisibility}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        aria-hidden={true}
                        role="img"
                    >
                        <path
                            fill="currentcolor"
                            fillRule="evenodd"
                            d={showHiddenChannels ? VisibleIconPath : HiddenIconPath}
                        />
                    </svg>
                </div>
            )}
        </Tooltip>
    );
}
