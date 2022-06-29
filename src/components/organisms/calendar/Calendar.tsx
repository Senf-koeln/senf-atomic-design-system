/** @format */

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { CalendarProps } from "./Calendar.types";

import "@fullcalendar/react/dist/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import deLocale from "@fullcalendar/core/locales/de";
import enLocale from "@fullcalendar/core/locales/en-gb";
import { formatDate } from "@fullcalendar/react";

import listMonth from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import i18n from "../../../util/i18n";

let str = formatDate(new Date(), {
  month: "long",
  year: "numeric",
  day: "numeric",
});

const Wrapper = styled.div<CalendarProps>`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  .fc {
    width: 100%;
    height: 100%;
  }

  .fc-theme-standard .fc-list {
    border: 0;
  }
  .fc table {
    font-size: 28, 666666666666664px !important;
    line-height: 22, 666666666666664px !important;
  }

  .fc .fc-button-group {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .fc .fc-button {
    border-radius: 20px;
    height: 50px;
    width: 50px;
    border-radius: 18px !important;
    border-color: white !important;
    background-color: white !important;
    color: #353535 !important;
  }

  .fc .fc-today-button {
    display: none !important;
  }

  .fc .fc-toolbar.fc-header-toolbar {
    z-index: 1;
    margin-bottom: 10px;
  }
  .fc .fc-toolbar-title {
    font-size: 22px;
    margin: 15px;
    position: absolute;
    color: #414345;
  }

  .fc-theme-standard .fc-list-day-cushion {
    background-color: transparent !important;
    padding: 18px 0px;
    width: 50px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .fc tr th {
    background-color: transparent !important;
  }

  .fc-direction-ltr .fc-list-day-side-text,
  .fc-direction-rtl .fc-list-day-text {
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    width: 19px;
    overflow: hidden;
    display: block;
    font-family: "Inconsolata", monospace;
    padding-bottom: 5px;
  }
  .fc-direction-ltr .fc-list-day-text,
  .fc-direction-rtl .fc-list-day-text {
    font-size: 28px;
    height: 35px;
    width: 38px;
    overflow: hidden;
    text-align: center;
    margin-left: 5px;
  }

  .fc .fc-list-day-side-text::first-letter {
    /* color: blue !important;
  font-family: "Comic Sans MS";
  font-size: 1em;
  font-weight: bold; */
  }

  .fc .fc-list-sticky .fc-list-day > * {
    position: relative;
  }

  .fc .fc-list-event-dot {
    border: 5px solid #f6c095;
    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid
      var(--fc-event-border-color, #f6c095);
    display: none;
  }
  .fc-direction-ltr .fc-list-table .fc-list-event-graphic {
    padding: 0 !important;
  }

  .fc-theme-standard td,
  .fc-theme-standard th {
    border: 0;
  }

  .fc table {
    width: 100%;
  }

  .fc table thead {
    display: none;
  }

  .fc .fc-list-table tbody {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: max-content;
    padding-bottom: 200px;
  }

  .fc-list-day {
    grid-column-start: 1;
    width: 50px;
  }
  .fc .fc-list-event {
    padding: 20px;
    border-radius: 20px;
    overflow: hidden;
    flex-direction: row-reverse;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-column-start: 2;
    background-color: ${({ theme }) => theme.colors.brown.brown4};
    border: 2px solid ${({ theme }) => theme.colors.white.white100};
  }
  .fc .fc-list-event:hover {
    background-color: rgb(255, 255, 255, 0.9);
  }

  .fc .fc-list-event:hover td {
    background-color: transparent !important;
  }

  .fc .fc-list-event-time {
    border-radius: 20px 0 0 20px;
    padding: 0px 0px !important;
    padding-bottom: 0 !important;
    color: grey;
  }

  .fc .fc-scroller-liquid {
    overflow: visible !important;
  }
`;

const Calendar: FC<CalendarProps> = ({
  googleCalendarId,
  googleCalendarApiKey,
  inlineCalendarEntries,
  calendarType,
  handleButtonOpenCard,
}) => {
  const [initState, setInitState] = useState({
    calendarWeekends: true,
    prev: "chevron-right",
    next: "chevron-right",
    calendarEvents: [
      // initial event data
      /*  {
        title: "Aktion X",
        date: new Date(1623397202 * 1000),
        id: "cIOhFG1vJoI9lDQ0QOPk",
      },
      */
    ],
  });

  useEffect(() => {
    if (googleCalendarId) {
      setInitState({
        ...initState,
        events: {
          googleCalendarId: googleCalendarId,
        },
      });
    }
  }, [googleCalendarId]);

  useEffect(() => {
    const data = [];
    let i;
    let u;
    if (inlineCalendarEntries && calendarType === "inline") {
      for (i = 0; i < inlineCalendarEntries.length; i++) {
        if (
          inlineCalendarEntries[i].selectedUnix === undefined ||
          inlineCalendarEntries[i].selectedUnix === null
        ) {
          continue;
        }
        for (u = 0; u < inlineCalendarEntries[i].selectedUnix.length; u++) {
          const eventObject = {
            title: inlineCalendarEntries[i].title,
            date: new Date(inlineCalendarEntries[i].selectedUnix[u] * 1000),
            id: inlineCalendarEntries[i].screamId,
          };
          data.push(eventObject);
        }
      }

      setInitState({ ...initState, calendarEvents: data });
    }
  }, [inlineCalendarEntries, calendarType]);

  const handleEventClick = ({ event, el }) => {
    if (inlineCalendarEntries) {
      handleButtonOpenCard(event, "ideaCard", event.id);
      // props.handleClick(1);
    } else {
    }
  };

  return (
    <Wrapper>
      <FullCalendar
        plugins={[listMonth, googleCalendarPlugin]}
        googleCalendarApiKey={googleCalendarApiKey}
        initialView="listMonth"
        events={
          calendarType === "inline"
            ? initState.calendarEvents
            : initState.events
        }
        locale={i18n.resolvedLanguage === "de" ? deLocale : enLocale}
        // eventContent={openProjectRoom ? null : renderEventContent}

        eventClick={
          calendarType === "inline"
            ? handleEventClick
            : (arg) => {
                // opens events in a popup window
                window.open(arg.event.url, "_blank", "width=700,height=600");

                // prevents current tab from navigating
                arg.jsEvent.preventDefault();
              }
        }
      />
    </Wrapper>
  );
};

export default Calendar;
