import React from 'react';

export default function Quote() {
  const quotes = [
    `"Always know more than you tell."\n― Neil Gaiman `, 
    `"The first draft is just you telling yourself the story."\n― Terry Pratchett`,
    `“You can always edit a bad page. You can’t edit a blank page.”\n― Jodi Picoult`,
    `"A professional writer is an amateur who didn’t quit.”\n― Richard Bach`,
    `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."\n― Toni Morrison`,
    `"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."\n― Robert Frost`,
    `"You can make anything by writing."\n― C.S. Lewis`,
    `"I write to discover what I know."\n― Flannery O'Connor`,

    ]

  let random = Math.ceil(Math.random() * quotes.length-1);

  return (
    <div id="quote">
      {quotes[random]}
    </div>
  )
}