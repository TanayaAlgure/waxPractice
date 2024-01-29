import { css } from 'styled-components'
import { th,darken } from '@pubsweet/ui-toolkit'

/* All styles regarding ProseMirror surface and elements */

const fontWriting = css`
  color: ${th('colorText')};
  font-family: ${th('fontWriting')};
  font-size: ${th('fontSizeBase')};
`

export default css`
  .ProseMirror {
    ${fontWriting}
  }

  .outline {
    pointer-events: none;
  }
`

export const ElementStyles = css`
  figure {
    margin: 1rem 0 2rem 0;
    padding: 1rem;
    position: relative;
    text-align: center;
    width: 100%;
  }

  figure::before {
    color: ${darken('colorPrimary', 1)};
    content: 'Figure:';
    font-size: 75%;
    left: 0;
    letter-spacing: 0.5px;
    position: absolute;
    text-transform: uppercase;
    top: -1.25rem;
  }

  figure:hover:before {
    content: 'Click to add a caption';
  }

  figure img {
    border: 1px solid ${darken('colorPrimary', 1)};
    padding:4px;
  }

  figcaption {
    border: 1px solid ${darken('colorPrimary', 1)};
    padding: 1rem;
    position: relative;
    text-align: center;
  }

  figcaption::before {
    color: ${darken('colorPrimary', 1)};
    content: 'Caption:';
    font-size: 75%;
    left: 0;
    letter-spacing: 0.5px;
    position: absolute;
    text-transform: uppercase;
    top: -1.25rem;
  }

  /*Reference citations*/
  span.mixed-citation {
    --citationColorValues: ${th('colorCitation')};
    --citationTextColor: black;
    --citationOffset: 2px;
    border-radius: 2px;
    outline: var(--citationColorValues) 1px solid;
    outline-offset: var(--citationOffset);
    position: relative;
    transition: 0.25;

    &:hover {
      &:before {
        background-color: var(--citationColorValues);
        border-radius: 4px;
        color: var(--citationTextColor);
        content: 'Mixed Citation';
        display: none;
        font-size: 12px;
        left: 16px;
        letter-spacing: 0.5px;
        padding: 0 4px;
        position: absolute;
        text-transform: uppercase;
        top: -16px;
        white-space: nowrap;
      }
    }
  }

  span.article-title,
  span.journal-title,
  span.citation-label,
  span.author-group,
  span.role,
  span.author-name,
  span.volume,
  span.email,
  span.institution,
  span.issue,
  span.year,
  span.first-page,
  span.last-page,
  span.orcid,
  a.doi,
  a.url {
    --citationColorValues: transparent;
    --citationTextColor: black;
    --citationOffset: 2px;
    border-radius: 2px;
    outline: ${th('colorCitation')} 1px solid;
    outline-offset: var(--citationOffset);
    position: relative;

    &:before {
      background-color: var(--citationColorValues);
      border-radius: 100%;
      content: '';
      display: none;
      height: 4px;
      left: -2px;
      position: absolute;
      top: -2px;
      width: 4px;
    }
    &:hover {
      outline-color: var(--citationColorValues);
    }
  }

  span.citation-label {
    --citationColorValues: ${th('colorCitationLabel')};
    --citationTextColor: white;
  }

  span.article-title {
    --citationColorValues: ${th('colorArticleTitle')};
    --citationTextColor: white;
  }

  span.journal-title {
    --citationColorValues: ${th('colorJournalTitle')};
    --citationTextColor: white;
    font-style: italic;
  }

  span.author-group {
    --citationColorValues: ${th('colorAuthorGroup')};
    --citationOffset: 4px;
    --citationTextColor: white;
  }

  span.role {
    --citationColorValues: ${th('colorRole')};
    --citationOffset: 4px;
    --citationTextColor: white;
  }

  span.author-name {
    --citationColorValues: ${th('colorAuthorName')};
    --citationTextColor: white;
  }

  a.doi {
    --citationColorValues: ${th('colorDoi')};
    --citationTextColor: white;
  }

  a.url {
    --citationColorValues: ${th('colorUrl')};
    --citationTextColor: white;
  }

  span.volume {
    --citationColorValues: ${th('colorVolume')};
    --citationTextColor: white;
  }

  span.orcid {
    --citationColorValues: ${th('colorOrcid')};
    --citationTextColor: white;
  }

  span.institution {
    --citationColorValues: ${th('colorInstitution')};
    --citationTextColor: white;
  }

  span.email {
    --citationColorValues: ${th('colorEmail')};
    --citationTextColor: white;
  }

  span.issue {
    --citationColorValues: ${th('colorIssue')};
    --citationTextColor: white;
  }

  span.first-page {
    --citationColorValues: ${th('colorFirstPage')};
    --citationTextColor: white;
  }

  span.last-page {
    --citationColorValues: ${th('colorLastPage')};
    --citationTextColor: white;
  }

  span.year {
    --citationColorValues: ${th('colorYear')};
    --citationTextColor: white;
  }

  .hide-citation-spans span,
  .hide-citation-spans a {
    --citationColorValues: transparent !important;
    --citationTextColor: transparent !important;
  }

  .show-article-title .article-title {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-journal-title .journal-title {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-citation-label .citation-label {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-author-group .author-group {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-role .role {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-author-name .author-name {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-volume .volume {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-orcid .orcid {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-email .email {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-institution .institution {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-issue .issue {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-year .year {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-first-page .first-page {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-last-page .last-page {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-doi a.doi {
    outline: var(--citationColorValues) 2px solid;
  }

  .show-url a.url {
    outline: var(--citationColorValues) 2px solid;
  }
`