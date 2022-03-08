// import React from 'react';
// import { formatDate } from '../../../../../src/services/format';
// import { createDataStore } from '../data_store';
//
// import {
//     EuiBasicTable,
//     EuiLink,
//     EuiHealth,
// } from '@elastic/eui';
//
// /*
// Example user object:
//
// {
//   id: '1',
//   firstName: 'john',
//   lastName: 'doe',
//   github: 'johndoe',
//   dateOfBirth: Date.now(),
//   nationality: 'NL',
//   online: true
// }
//
// Example country object:
//
// {
//   code: 'NL',
//   name: 'Netherlands',
//   flag: '🇳🇱'
// }
// */
//
// const store = createDataStore();
//
// export const Table = () => {
//     const columns = [
//         {
//             field: 'firstName',
//             name: 'First Name',
//             sortable: true,
//             'data-test-subj': 'firstNameCell',
//             mobileOptions: {
//                 render: item => (
//                     <span>
//             {item.firstName}{' '}
//                         <EuiLink href="#" target="_blank">
//               {item.lastName}
//             </EuiLink>
//           </span>
//                 ),
//                 header: false,
//                 truncateText: false,
//                 enlarge: true,
//                 fullWidth: true,
//             },
//         },
//         {
//             field: 'lastName',
//             name: 'Last Name',
//             truncateText: true,
//             render: name => (
//                 <EuiLink href="#" target="_blank">
//                     {name}
//                 </EuiLink>
//             ),
//             mobileOptions: {
//                 show: false,
//             },
//         },
//         {
//             field: 'github',
//             name: 'Github',
//         },
//         {
//             field: 'dateOfBirth',
//             name: 'Date of Birth',
//             dataType: 'date',
//             render: date => formatDate(date, 'dobLong'),
//         },
//         {
//             field: 'nationality',
//             name: 'Nationality',
//             render: countryCode => {
//                 const country = store.getCountry(countryCode);
//                 return `${country.flag} ${country.name}`;
//             },
//         },
//         {
//             field: 'online',
//             name: 'Online',
//             dataType: 'boolean',
//             render: online => {
//                 const color = online ? 'success' : 'danger';
//                 const label = online ? 'Online' : 'Offline';
//                 return <EuiHealth color={color}>{label}</EuiHealth>;
//             },
//         },
//     ];
//
//     const items = store.users.filter((user, index) => index < 10);
//
//     const getRowProps = item => {
//         const { id } = item;
//         return {
//             'data-test-subj': `row-${id}`,
//             className: 'customRowClass',
//             onClick: () => console.log(`Clicked row ${id}`),
//         };
//     };
//
//     const getCellProps = (item, column) => {
//         const { id } = item;
//         const { field } = column;
//         return {
//             className: 'customCellClass',
//             'data-test-subj': `cell-${id}-${field}`,
//             textOnly: true,
//         };
//     };
//
//     return (
//         <EuiBasicTable
//             items={items}
//             columns={columns}
//             rowProps={getRowProps}
//             cellProps={getCellProps}
//         />
//     );
// };
//
// Adding pagination to a BasicTable
// The following example shows how to configure pagination via the paginationproperty.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
//
// Hide per page options with pagination.hidePerPageOptions = true
//     Below is a table of 5 items.
//     First Name
// Last Name
// Github
// Date of Birth
// Nationality
// Online
// Very long first name that will wrap or be truncated
// Very long last name that will wrap or be truncated
// martijnvg
// 1st February 1980
// 🇳🇱 Netherlands
// Online
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
// Igor
// Motov
// imotov
// 1st February 1980
// 🇺🇲 United States
// Offline
// Minarik
// karmi
// 1st February 1980
// 🇦🇺 Australia
// Online
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// Adding sorting to a BasicTable
// The following example shows how to configure column sorting via the sortingproperty and flagging the sortable columns as sortable: true
//
//
// Demo
//
// Demo JS
//
// Demo HTML
// Below is a table of 5 items.
//
//     First Name
// Click to sort in descending order
//
// Last Name
// Click to sort in ascending order
//
// Github
// Click to sort in ascending order
//
// Date of Birth
// Click to sort in ascending order
//
// Nationality
// Click to sort in ascending order
//
// Online
// Click to sort in ascending order
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇫🇯 Fiji
// Offline
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇬🇧 United Kingdom
// Online
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// Adding selection to a BasicTable
// The following example shows how to configure selection via the selectionproperty.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
// Below is a table of 5 items.
//
//
//     First Name
// Click to sort in descending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
//
// Online
// Click to sort in ascending order
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇫🇯 Fiji
// Offline
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇬🇧 United Kingdom
// Online
//
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// Adding a footer to a BasicTable
// The following example shows how to add a footer to your table by adding footer to your column definitions. If one or more of your columns contains a footer definition, the footer area will be visible. By default, columns with no footer specified (undefined) will render an empty cell to preserve the table layout. Check out the "Custom Table" section below for more examples of how you can work with table footers in EUI.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
// Below is a table of 5 items.
//
//
//     First Name
// Click to sort in descending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
//
// Online
// Click to sort in ascending order
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇫🇯 Fiji
// Offline
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇬🇧 United Kingdom
// Online
//
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
// Page totals:
//     3 users
// 5 countries
// 2 online
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// Expanding rows
// You can expand rows by passing in a itemIdToExpandedRowMap prop which will contain the content you want rendered inside the expanded row. When building out your table manually (not using EuiBasicTable), you will also need to add the prop isExpandedRow to the row that will be revealed.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
// Below is a table of 5 items.
//
//
//     First Name
// Click to sort in descending order
// Last Name
//
// Date of Birth
// Click to sort in ascending order
// Actions
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// 1st February 1980
//
//
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// 1st February 1980
//
//
//
// Clinton
// Gormley
// 1st February 1980
//
//
//
// Clinton
// Gormley
// 1st February 1980
//
//
//
// Drew
// Raines
// 1st February 1980
//
//
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// Adding actions to BasicTable
// The following example demonstrates "actions" columns. These are special columns where you define per-row, item level actions. The most basic action you might define is a type button or icon though you can always make your own custom actions as well.
//
//     Actions enforce some strict UI/UX guidelines:
//
//     There can only be up to 2 actions visible per row. When more than two actions are defined, the first 2 isPrimary actions will stay visible, an ellipses icon button will hold all actions in a single popover.
//     Actions change opacity when user hovers over the row with the mouse. When more than 2 actions are supplied, only the ellipses icon button stays visible at all times.
//
//     Demo
//
// Demo JS
//
// Demo HTML
//
// Multiple Actions
//
// Custom Actions
// Below is a table of 5 items.
//
//
//     First Name
// Click to sort in descending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
//
// Online
// Click to sort in ascending order
// Actions
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇫🇯 Fiji
// Offline
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇬🇧 United Kingdom
// Online
//
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// In-Memory Table
// The EuiInMemoryTable is a higher level component wrapper around EuiBasicTable that aimed at displaying tables data when all the data is in memory. It takes the full set of data (all possible items) and based on its configuration, will display it handling all configured functionality (pagination and sorting) for you.
//
//
//                                                                                                                                                                                                                                                                                                                              Demo
//
//     Demo JS
//
// Demo HTML
//
// Props
// Below is a table of 10 items.
//
//     First Name
// Click to sort in ascending order
// Last Name
// Github
//
// Date of Birth
// Click to unsort
// Nationality
//
// Online
// Click to sort in ascending order
// Very long first name that will wrap or be truncated
// Very long last name that will wrap or be truncated
// martijnvg
// 1st February 1980
// 🇳🇱 Netherlands
// Online
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
// Igor
// Motov
// imotov
// 1st February 1980
// 🇺🇲 United States
// Offline
// Minarik
// karmi
// 1st February 1980
// 🇦🇺 Australia
// Online
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
// Král
// HonzaKral
// 1st February 1980
// 🇳🇴 Norway
// Online
// Rashid
// Khan
// rashidkpc
// 1st February 1980
// 🇮🇹 Italy
// Offline
// Sissel
// jordansissel
// 1st February 1980
// 🇨🇦 Canada
// Online
// John
// Dorlus
// silne30
// 1st February 1980
// 🇨🇬 Congo
// Offline
//
// Rows per page: 10
//
//
// 1
//
// 2
//
// In-Memory Table - Selection
// The following example shows how to use EuiInMemoryTable along with item selection. It also shows how you can display messages, errors and show loading indication.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
// Search...
//
// Online
//
// Nationality
//
// Load Users
//
// Load Users (Error)
// Below is a table of 0 items.
//
//
//     First Name
// Click to sort in ascending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
//
// Online
// Click to sort in ascending order
// No users
// Looks like you don’t have any users. Let’s create some!
//
//     Load Users
// In-Memory Table - With Search
// The example shows how to configure EuiInMemoryTable to display a search bar
//
//
// Demo
//
// Demo JS
//
// Demo HTML
//
// Props
//
// Incremental
//
// With Filters
// Search...
// Below is a table of 10 items.
//
//     First Name
// Click to sort in ascending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
// Online
// Nationality
//
// Online
// Click to sort in ascending order
// Very long first name that will wrap or be truncated
// Very long last name that will wrap or be truncated
// martijnvg
// 1st February 1980
// 🇳🇱 Netherlands
// Online
// 🇳🇱 Netherlands
// Online
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
// 🇨🇿 Czech Republic
// Offline
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
// 🇿🇦 South Africa
// Online
// Igor
// Motov
// imotov
// 1st February 1980
// 🇺🇲 United States
// Offline
// 🇺🇲 United States
// Offline
// Minarik
// karmi
// 1st February 1980
// 🇦🇺 Australia
// Online
// 🇦🇺 Australia
// Online
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
// 🇮🇱 Israel
// Offline
// Král
// HonzaKral
// 1st February 1980
// 🇳🇴 Norway
// Online
// 🇳🇴 Norway
// Online
// Rashid
// Khan
// rashidkpc
// 1st February 1980
// 🇮🇹 Italy
// Offline
// 🇮🇹 Italy
// Offline
// Sissel
// jordansissel
// 1st February 1980
// 🇨🇦 Canada
// Online
// 🇨🇦 Canada
// Online
// John
// Dorlus
// silne30
// 1st February 1980
// 🇨🇬 Congo
// Offline
// 🇨🇬 Congo
// Offline
//
// Rows per page: 10
//
//
// 1
//
// 2
//
// In-Memory Table - With Search Callback
// The example shows how to configure EuiInMemoryTable to display a search bar and intercept the search value when it changes so you can perform your own search logic.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
//
// Props
// Search...
// Below is a table of 10 items.
//
//     First Name
// Click to sort in ascending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
//
// Online
// Click to sort in ascending order
// Very long first name that will wrap or be truncated
// Very long last name that will wrap or be truncated
// martijnvg
// 1st February 1980
// 🇳🇱 Netherlands
// Online
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
// Igor
// Motov
// imotov
// 1st February 1980
// 🇺🇲 United States
// Offline
// Minarik
// karmi
// 1st February 1980
// 🇦🇺 Australia
// Online
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
// Král
// HonzaKral
// 1st February 1980
// 🇳🇴 Norway
// Online
// Rashid
// Khan
// rashidkpc
// 1st February 1980
// 🇮🇹 Italy
// Offline
// Sissel
// jordansissel
// 1st February 1980
// 🇨🇦 Canada
// Online
// John
// Dorlus
// silne30
// 1st February 1980
// 🇨🇬 Congo
// Offline
//
// Rows per page: 10
//
//
// 1
//
// 2
//
// In-Memory Table - Custom sort values
// Sometimes the value displayed in a column is not appropriate to use for sorting, such as pre-formatting values to be human-readable. In these cases it's possible to pass the sortable prop as a function instead of true or false. The function is used to extract or calculate the intended sort value for each item.
//
//
// Demo
//
// Demo JS
//
// Demo HTML
//
// Props
// Below is a table of 6 items.
//
//     Animal
// Click to sort in ascending order
//
// Weight
// Click to sort in descending order
//
// Weight (grams)
// Click to sort in ascending order
// snail
// 0.025kg
// 25
// peregrine falcon
// 0.9kg
// 900
// small dog
// 4.5kg
// 4500
// brown bear
// 180kg
// 180000
// giraffe
// 1180kg
// 1180000
// elephant
// 5440kg
// 5440000
// Responsive tables
// Allowing a table to be responsive means breaking each row down into its own section and individually displaying each table header above the cell contents. There are few times when you may want to exclude this behavior from your table, for instance, when the table has very few columns or the table does not break down easily into this format. For these use cases, you may set responsive = false.
//
//     To make your table work responsively, please make sure you add the following additional props to the top level table component (EuiBasicTable or EuiInMemoryTable):
// isSelectable: if the table has a single column of checkboxes for selecting rows
// isExpandable: if the table has rows that can expand
// hasActions: if the table has a column for actions which may/may not be hidden in hover
// The mobileOptions object can be passed to the EuiTableRowCell directly or with each column item provided to EuiBasicTable.
// {
//     field: 'firstName',
//         name: 'First Name',
//     truncateText: true,
//     mobileOptions: {
//     render: (item) => (<span>{item.firstName} {item.lastName}</span>), // Custom renderer for mobile view only
//         header: false,   // Won't show inline header in mobile view
//         fullWidth: true, // Forces 100% width of the cell
//         enlarge: true,   // Increase text size compared to rest of cells
//         truncateText: false, // Only works if a 'render()' is also provided
// }
// }
// Note:
//     You can also change basic table row cell props like truncateText and textOnly for mobile layouts, though you must also be passing a mobile specific render function.
//
//
// Demo
//
// Demo JS
//
// Demo HTML
//
// Props
//
// Responsive
//
// Custom header
// Below is a table of 5 items.
//
//
//     First Name
// Click to sort in descending order
// Last Name
// Github
//
// Date of Birth
// Click to sort in ascending order
// Nationality
//
// Online
// Click to sort in ascending order
// Actions
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇨🇿 Czech Republic
// Offline
//
//
//
// Another very long first name which will wrap or be truncated
// Another very long last name which will wrap or be truncated
// elissaw
// 1st February 1980
// 🇫🇯 Fiji
// Offline
//
//
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇿🇦 South Africa
// Online
//
//
//
// Clinton
// Gormley
// clintongormley
// 1st February 1980
// 🇬🇧 United Kingdom
// Online
//
//
//
// Drew
// Raines
// drewr
// 1st February 1980
// 🇮🇱 Israel
// Offline
//
//
//
// Rows per page: 5
//
//
// 1
//
// 2
//
// 3
//
// 4
//
// Build a custom table from individual components
// As an alternative to EuiBasicTable you can instead construct a table from individual low level, basic components like EuiTableHeader and EuiTableRowCell. Below is one of many ways you might set this up on your own. Important to note are how you need to set individual props like the truncateText prop to cells to enforce a single-line behavior and truncate their contents, or set the textOnly prop to false if you need the contents to be a direct descendent of the cell.
//
//     Responsive extras
// You must supply a mobileOptions.header prop equivalent to the column header on each EuiTableRowCell so that the mobile version will use that to populate the per cell headers.
//
//     Also, custom table implementations will not auto-populate any header level functions like selection and filtering. In order to add mobile support for these functions, you will need to implement the EuiTableHeaderMobile component as a wrapper around these and use EuiTableSortMobile and EuiTableSortMobileItem components to supply mobile sorting. See demo below.
//
//
//     Demo
//
// Demo JS
//
// Demo HTML
//
// Props
// import React, { Component } from 'react';
//
// import {
//     EuiBadge,
//     EuiHealth,
//     EuiButton,
//     EuiButtonIcon,
//     EuiCheckbox,
//     EuiContextMenuItem,
//     EuiContextMenuPanel,
//     EuiFieldSearch,
//     EuiFlexGroup,
//     EuiFlexItem,
//     EuiIcon,
//     EuiLink,
//     EuiPopover,
//     EuiSpacer,
//     EuiTable,
//     EuiTableBody,
//     EuiTableFooter,
//     EuiTableFooterCell,
//     EuiTableHeader,
//     EuiTableHeaderCell,
//     EuiTableHeaderCellCheckbox,
//     EuiTablePagination,
//     EuiTableRow,
//     EuiTableRowCell,
//     EuiTableRowCellCheckbox,
//     EuiTableSortMobile,
//     EuiTableHeaderMobile,
// } from '@elastic/eui';
//
// import {
//     LEFT_ALIGNMENT,
//     RIGHT_ALIGNMENT,
//     Pager,
//     SortableProperties,
// } from '@elastic/eui/lib/services';
//
// import { isFunction } from '../../../../../src/services/predicate';
//
// export default class extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             itemIdToSelectedMap: {},
//             itemIdToOpenActionsPopoverMap: {},
//             sortedColumn: 'title',
//             itemsPerPage: 10,
//         };
//
//         this.items = [
//             {
//                 id: 0,
//                 title:
//                     'A very long line which will wrap on narrower screens and NOT become truncated and replaced by an ellipsis',
//                 type: 'user',
//                 dateCreated: 'Tue Dec 28 2016',
//                 magnitude: 1,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 1,
//                 title: {
//                     value:
//                         'A very long line which will not wrap on narrower screens and instead will become truncated and replaced by an ellipsis',
//                     truncateText: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 01 2016',
//                 magnitude: 1,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 2,
//                 title: (
//                     <span>
//             A very long line in an ELEMENT which will wrap on narrower screens
//             and NOT become truncated and replaced by an ellipsis
//           </span>
//                 ),
//                 type: 'user',
//                 dateCreated: (
//                     <span>
//             Tue Dec 01 2016 &nbsp; <EuiBadge color="secondary">New!</EuiBadge>
//           </span>
//                 ),
//                 magnitude: 10,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 3,
//                 title: {
//                     value: (
//                         <span>
//               A very long line in an ELEMENT which will not wrap on narrower
//               screens and instead will become truncated and replaced by an
//               ellipsis
//             </span>
//                     ),
//                     truncateText: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 16 2016',
//                 magnitude: 100,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 4,
//                 title: {
//                     value: 'Dog',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 13 2016',
//                 magnitude: 1000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 5,
//                 title: {
//                     value: 'Dragon',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 6,
//                 title: {
//                     value: 'Bear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="danger">Danger</EuiHealth>,
//             },
//             {
//                 id: 7,
//                 title: {
//                     value: 'Dinosaur',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 8,
//                 title: {
//                     value: 'Spider',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 9,
//                 title: {
//                     value: 'Bugbear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 10,
//                 title: {
//                     value: 'Bear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="danger">Danger</EuiHealth>,
//             },
//             {
//                 id: 11,
//                 title: {
//                     value: 'Dinosaur',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 12,
//                 title: {
//                     value: 'Spider',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 13,
//                 title: {
//                     value: 'Bugbear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="danger">Danger</EuiHealth>,
//             },
//         ];
//
//         this.sortableProperties = new SortableProperties(
//             [
//                 {
//                     name: 'title',
//                     getValue: item => item.title.toLowerCase(),
//                     isAscending: true,
//                 },
//                 {
//                     name: 'dateCreated',
//                     getValue: item => item.dateCreated.toLowerCase(),
//                     isAscending: true,
//                 },
//                 {
//                     name: 'magnitude',
//                     getValue: item => item.magnitude.toLowerCase(),
//                     isAscending: true,
//                 },
//             ],
//             this.state.sortedColumn
//         );
//
//         this.columns = [
//             {
//                 id: 'checkbox',
//                 isCheckbox: true,
//                 textOnly: false,
//                 width: '24px',
//             },
//             {
//                 id: 'type',
//                 label: '',
//                 alignment: LEFT_ALIGNMENT,
//                 width: '24px',
//                 cellProvider: cell => <EuiIcon type={cell} size="m" />,
//                 mobileOptions: {
//                     show: false,
//                 },
//             },
//             {
//                 id: 'title',
//                 label: 'Title',
//                 footer: <em>Title</em>,
//                 alignment: LEFT_ALIGNMENT,
//                 isSortable: true,
//                 mobileOptions: {
//                     show: false,
//                 },
//             },
//             {
//                 id: 'title_type',
//                 label: 'Title',
//                 mobileOptions: {
//                     only: true,
//                     header: false,
//                     enlarge: true,
//                     fullWidth: true,
//                 },
//                 render: (title, item) => (
//                     <span>
//             <EuiIcon
//                 type={item.type}
//                 size="m"
//                 style={{ verticalAlign: 'text-top' }}
//             />{' '}
//                         {title}
//           </span>
//                 ),
//             },
//             {
//                 id: 'health',
//                 label: 'Health',
//                 footer: '',
//                 alignment: LEFT_ALIGNMENT,
//             },
//             {
//                 id: 'dateCreated',
//                 label: 'Date created',
//                 footer: 'Date created',
//                 alignment: LEFT_ALIGNMENT,
//                 isSortable: true,
//             },
//             {
//                 id: 'magnitude',
//                 label: 'Orders of magnitude',
//                 footer: ({ items, pagination }) => {
//                     const { pageIndex, pageSize } = pagination;
//                     const startIndex = pageIndex * pageSize;
//                     const pageOfItems = items.slice(
//                         startIndex,
//                         Math.min(startIndex + pageSize, items.length)
//                     );
//                     return (
//                         <strong>
//                             Total: {pageOfItems.reduce((acc, cur) => acc + cur.magnitude, 0)}
//                         </strong>
//                     );
//                 },
//                 alignment: RIGHT_ALIGNMENT,
//                 isSortable: true,
//             },
//             {
//                 id: 'actions',
//                 label: '',
//                 alignment: RIGHT_ALIGNMENT,
//                 isActionsPopover: true,
//                 width: '32px',
//             },
//         ];
//
//         this.pager = new Pager(this.items.length, this.state.itemsPerPage);
//         this.state.firstItemIndex = this.pager.getFirstItemIndex();
//         this.state.lastItemIndex = this.pager.getLastItemIndex();
//     }
//
//     onChangeItemsPerPage = itemsPerPage => {
//         this.pager.setItemsPerPage(itemsPerPage);
//         this.setState({
//             itemsPerPage,
//             firstItemIndex: this.pager.getFirstItemIndex(),
//             lastItemIndex: this.pager.getLastItemIndex(),
//         });
//     };
//
//     onChangePage = pageIndex => {
//         this.pager.goToPageIndex(pageIndex);
//         this.setState({
//             firstItemIndex: this.pager.getFirstItemIndex(),
//             lastItemIndex: this.pager.getLastItemIndex(),
//         });
//     };
//
//     onSort = prop => {
//         this.sortableProperties.sortOn(prop);
//
//         this.setState({
//             sortedColumn: prop,
//         });
//     };
//
//     toggleItem = itemId => {
//         this.setState(previousState => {
//             const newItemIdToSelectedMap = {
//                 ...previousState.itemIdToSelectedMap,
//                 [itemId]: !previousState.itemIdToSelectedMap[itemId],
//             };
//
//             return {
//                 itemIdToSelectedMap: newItemIdToSelectedMap,
//             };
//         });
//     };
//
//     toggleAll = () => {
//         const allSelected = this.areAllItemsSelected();
//         const newItemIdToSelectedMap = {};
//         this.items.forEach(
//             item => (newItemIdToSelectedMap[item.id] = !allSelected)
//         );
//
//         this.setState({
//             itemIdToSelectedMap: newItemIdToSelectedMap,
//         });
//     };
//
//     isItemSelected = itemId => {
//         return this.state.itemIdToSelectedMap[itemId];
//     };
//
//     areAllItemsSelected = () => {
//         const indexOfUnselectedItem = this.items.findIndex(
//             item => !this.isItemSelected(item.id)
//         );
//         return indexOfUnselectedItem === -1;
//     };
//
//     areAnyRowsSelected = () => {
//         return (
//             Object.keys(this.state.itemIdToSelectedMap).findIndex(id => {
//                 return this.state.itemIdToSelectedMap[id];
//             }) !== -1
//         );
//     };
//
//     togglePopover = itemId => {
//         this.setState(previousState => {
//             const newItemIdToOpenActionsPopoverMap = {
//                 ...previousState.itemIdToOpenActionsPopoverMap,
//                 [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId],
//             };
//
//             return {
//                 itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
//             };
//         });
//     };
//
//     closePopover = itemId => {
//         // only update the state if this item's popover is open
//         if (this.isPopoverOpen(itemId)) {
//             this.setState(previousState => {
//                 const newItemIdToOpenActionsPopoverMap = {
//                     ...previousState.itemIdToOpenActionsPopoverMap,
//                     [itemId]: false,
//                 };
//
//                 return {
//                     itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
//                 };
//             });
//         }
//     };
//
//     isPopoverOpen = itemId => {
//         return this.state.itemIdToOpenActionsPopoverMap[itemId];
//     };
//
//     renderSelectAll = mobile => {
//         return (
//             <EuiCheckbox
//                 id="selectAllCheckbox"
//                 label={mobile ? 'Select all' : null}
//                 checked={this.areAllItemsSelected()}
//                 onChange={this.toggleAll.bind(this)}
//                 type={mobile ? null : 'inList'}
//             />
//         );
//     };
//
//     getTableMobileSortItems() {
//         const items = [];
//         this.columns.forEach(column => {
//             if (column.isCheckbox || !column.isSortable) {
//                 return;
//             }
//             items.push({
//                 name: column.label,
//                 key: column.id,
//                 onSort: this.onSort.bind(this, column.id),
//                 isSorted: this.state.sortedColumn === column.id,
//                 isSortAscending: this.sortableProperties.isAscendingByName(column.id),
//             });
//         });
//         return items.length ? items : null;
//     }
//
//     renderHeaderCells() {
//         const headers = [];
//
//         this.columns.forEach((column, columnIndex) => {
//             if (column.isCheckbox) {
//                 headers.push(
//                     <EuiTableHeaderCellCheckbox key={column.id} width={column.width}>
//                         {this.renderSelectAll()}
//                     </EuiTableHeaderCellCheckbox>
//                 );
//             } else {
//                 headers.push(
//                     <EuiTableHeaderCell
//                         key={column.id}
//                         align={this.columns[columnIndex].alignment}
//                         width={column.width}
//                         onSort={
//                             column.isSortable ? this.onSort.bind(this, column.id) : undefined
//                         }
//                         isSorted={this.state.sortedColumn === column.id}
//                         isSortAscending={this.sortableProperties.isAscendingByName(
//                             column.id
//                         )}
//                         mobileOptions={column.mobileOptions}>
//                         {column.label}
//                     </EuiTableHeaderCell>
//                 );
//             }
//         });
//         return headers.length ? headers : null;
//     }
//
//     renderRows() {
//         const renderRow = item => {
//             const cells = this.columns.map(column => {
//                 const cell = item[column.id];
//
//                 let child;
//
//                 if (column.isCheckbox) {
//                     return (
//                         <EuiTableRowCellCheckbox key={column.id}>
//                             <EuiCheckbox
//                                 id={`${item.id}-checkbox`}
//                                 checked={this.isItemSelected(item.id)}
//                                 onChange={this.toggleItem.bind(this, item.id)}
//                                 type="inList"
//                             />
//                         </EuiTableRowCellCheckbox>
//                     );
//                 }
//
//                 if (column.isActionsPopover) {
//                     return (
//                         <EuiTableRowCell
//                             key={column.id}
//                             header={column.label}
//                             textOnly={false}
//                             hasActions={true}
//                             align="right">
//                             <EuiPopover
//                                 id={`${item.id}-actions`}
//                                 button={
//                                     <EuiButtonIcon
//                                         aria-label="Actions"
//                                         iconType="gear"
//                                         size="s"
//                                         color="text"
//                                         onClick={() => this.togglePopover(item.id)}
//                                     />
//                                 }
//                                 isOpen={this.isPopoverOpen(item.id)}
//                                 closePopover={() => this.closePopover(item.id)}
//                                 panelPaddingSize="none"
//                                 anchorPosition="leftCenter">
//                                 <EuiContextMenuPanel
//                                     items={[
//                                         <EuiContextMenuItem
//                                             key="A"
//                                             icon="pencil"
//                                             onClick={() => {
//                                                 this.closePopover(item.id);
//                                             }}>
//                                             Edit
//                                         </EuiContextMenuItem>,
//                                         <EuiContextMenuItem
//                                             key="B"
//                                             icon="share"
//                                             onClick={() => {
//                                                 this.closePopover(item.id);
//                                             }}>
//                                             Share
//                                         </EuiContextMenuItem>,
//                                         <EuiContextMenuItem
//                                             key="C"
//                                             icon="trash"
//                                             onClick={() => {
//                                                 this.closePopover(item.id);
//                                             }}>
//                                             Delete
//                                         </EuiContextMenuItem>,
//                                     ]}
//                                 />
//                             </EuiPopover>
//                         </EuiTableRowCell>
//                     );
//                 }
//
//                 if (column.render) {
//                     const titleText = item.title.truncateText
//                         ? item.title.value
//                         : item.title;
//                     const title = item.title.isLink ? (
//                         <EuiLink href="">{item.title.value}</EuiLink>
//                     ) : (
//                         titleText
//                     );
//                     child = column.render(title, item);
//                 } else if (column.cellProvider) {
//                     child = column.cellProvider(cell);
//                 } else if (cell.isLink) {
//                     child = <EuiLink href="">{cell.value}</EuiLink>;
//                 } else if (cell.truncateText) {
//                     child = cell.value;
//                 } else {
//                     child = cell;
//                 }
//
//                 return (
//                     <EuiTableRowCell
//                         key={column.id}
//                         align={column.alignment}
//                         truncateText={cell && cell.truncateText}
//                         textOnly={cell ? cell.textOnly : true}
//                         mobileOptions={{
//                             header: column.label,
//                             ...column.mobileOptions,
//                         }}>
//                         {child}
//                     </EuiTableRowCell>
//                 );
//             });
//
//             return (
//                 <EuiTableRow
//                     key={item.id}
//                     isSelected={this.isItemSelected(item.id)}
//                     isSelectable={true}
//                     hasActions={true}>
//                     {cells}
//                 </EuiTableRow>
//             );
//         };
//
//         const rows = [];
//
//         for (
//             let itemIndex = this.state.firstItemIndex;
//             itemIndex <= this.state.lastItemIndex;
//             itemIndex++
//         ) {
//             const item = this.items[itemIndex];
//             rows.push(renderRow(item));
//         }
//
//         return rows;
//     }
//
//     renderFooterCells() {
//         const footers = [];
//
//         const items = this.items;
//         const pagination = {
//             pageIndex: this.pager.getCurrentPageIndex(),
//             pageSize: this.state.itemsPerPage,
//             totalItemCount: this.pager.getTotalPages(),
//         };
//
//         this.columns.forEach(column => {
//             const footer = this.getColumnFooter(column, { items, pagination });
//             if (column.mobileOptions && column.mobileOptions.only) {
//                 return; // exclude columns that only exist for mobile headers
//             }
//
//             if (footer) {
//                 footers.push(
//                     <EuiTableFooterCell
//                         key={`footer_${column.id}`}
//                         align={column.alignment}>
//                         {footer}
//                     </EuiTableFooterCell>
//                 );
//             } else {
//                 footers.push(
//                     <EuiTableFooterCell
//                         key={`footer_empty_${footers.length - 1}`}
//                         align={column.alignment}>
//                         {undefined}
//                     </EuiTableFooterCell>
//                 );
//             }
//         });
//         return footers;
//     }
//
//     getColumnFooter = (column, { items, pagination }) => {
//         if (column.footer === null) {
//             return null;
//         }
//
//         if (column.footer) {
//             if (isFunction(column.footer)) {
//                 return column.footer({ items, pagination });
//             }
//             return column.footer;
//         }
//
//         return undefined;
//     };
//
//     render() {
//         let optionalActionButtons;
//
//         if (this.areAnyRowsSelected() > 0) {
//             optionalActionButtons = (
//                 <EuiFlexItem grow={false}>
//                     <EuiButton color="danger">Delete selected</EuiButton>
//                 </EuiFlexItem>
//             );
//         }
//
//         return (
//             <div>
//                 <EuiFlexGroup gutterSize="m">
//                     {optionalActionButtons}
//
//                     <EuiFlexItem>
//                         <EuiFieldSearch fullWidth placeholder="Search..." />
//                     </EuiFlexItem>
//                 </EuiFlexGroup>
//
//                 <EuiSpacer size="m" />
//
//                 <EuiTableHeaderMobile>
//                     <EuiFlexGroup
//                         responsive={false}
//                         justifyContent="spaceBetween"
//                         alignItems="baseline">
//                         <EuiFlexItem grow={false}>{this.renderSelectAll(true)}</EuiFlexItem>
//                         <EuiFlexItem grow={false}>
//                             <EuiTableSortMobile items={this.getTableMobileSortItems()} />
//                         </EuiFlexItem>
//                     </EuiFlexGroup>
//                 </EuiTableHeaderMobile>
//
//                 <EuiTable>
//                     <EuiTableHeader>{this.renderHeaderCells()}</EuiTableHeader>
//
//                     <EuiTableBody>{this.renderRows()}</EuiTableBody>
//
//                     <EuiTableFooter>{this.renderFooterCells()}</EuiTableFooter>
//                 </EuiTable>
//
//                 <EuiSpacer size="m" />
//
//                 <EuiTablePagination
//                     activePage={this.pager.getCurrentPageIndex()}
//                     itemsPerPage={this.state.itemsPerPage}
//                     itemsPerPageOptions={[5, 10, 20]}
//                     pageCount={this.pager.getTotalPages()}
//                     onChangeItemsPerPage={this.onChangeItemsPerPage}
//                     onChangePage={this.onChangePage}
//                 />
//             </div>
//         );
//     }
// }
//
// import React, { Component } from 'react';
//
// import {
//     EuiBadge,
//     EuiHealth,
//     EuiButton,
//     EuiButtonIcon,
//     EuiCheckbox,
//     EuiContextMenuItem,
//     EuiContextMenuPanel,
//     EuiFieldSearch,
//     EuiFlexGroup,
//     EuiFlexItem,
//     EuiIcon,
//     EuiLink,
//     EuiPopover,
//     EuiSpacer,
//     EuiTable,
//     EuiTableBody,
//     EuiTableFooter,
//     EuiTableFooterCell,
//     EuiTableHeader,
//     EuiTableHeaderCell,
//     EuiTableHeaderCellCheckbox,
//     EuiTablePagination,
//     EuiTableRow,
//     EuiTableRowCell,
//     EuiTableRowCellCheckbox,
//     EuiTableSortMobile,
//     EuiTableHeaderMobile,
// } from '@elastic/eui';
//
// import {
//     LEFT_ALIGNMENT,
//     RIGHT_ALIGNMENT,
//     Pager,
//     SortableProperties,
// } from '@elastic/eui/lib/services';
//
// import { isFunction } from '../../../../../src/services/predicate';
//
// export default class extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             itemIdToSelectedMap: {},
//             itemIdToOpenActionsPopoverMap: {},
//             sortedColumn: 'title',
//             itemsPerPage: 10,
//         };
//
//         this.items = [
//             {
//                 id: 0,
//                 title:
//                     'A very long line which will wrap on narrower screens and NOT become truncated and replaced by an ellipsis',
//                 type: 'user',
//                 dateCreated: 'Tue Dec 28 2016',
//                 magnitude: 1,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 1,
//                 title: {
//                     value:
//                         'A very long line which will not wrap on narrower screens and instead will become truncated and replaced by an ellipsis',
//                     truncateText: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 01 2016',
//                 magnitude: 1,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 2,
//                 title: (
//                     <span>
//             A very long line in an ELEMENT which will wrap on narrower screens
//             and NOT become truncated and replaced by an ellipsis
//           </span>
//                 ),
//                 type: 'user',
//                 dateCreated: (
//                     <span>
//             Tue Dec 01 2016 &nbsp; <EuiBadge color="secondary">New!</EuiBadge>
//           </span>
//                 ),
//                 magnitude: 10,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 3,
//                 title: {
//                     value: (
//                         <span>
//               A very long line in an ELEMENT which will not wrap on narrower
//               screens and instead will become truncated and replaced by an
//               ellipsis
//             </span>
//                     ),
//                     truncateText: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 16 2016',
//                 magnitude: 100,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 4,
//                 title: {
//                     value: 'Dog',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 13 2016',
//                 magnitude: 1000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 5,
//                 title: {
//                     value: 'Dragon',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 6,
//                 title: {
//                     value: 'Bear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="danger">Danger</EuiHealth>,
//             },
//             {
//                 id: 7,
//                 title: {
//                     value: 'Dinosaur',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 8,
//                 title: {
//                     value: 'Spider',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 9,
//                 title: {
//                     value: 'Bugbear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 10,
//                 title: {
//                     value: 'Bear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="danger">Danger</EuiHealth>,
//             },
//             {
//                 id: 11,
//                 title: {
//                     value: 'Dinosaur',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="warning">Warning</EuiHealth>,
//             },
//             {
//                 id: 12,
//                 title: {
//                     value: 'Spider',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="success">Healthy</EuiHealth>,
//             },
//             {
//                 id: 13,
//                 title: {
//                     value: 'Bugbear',
//                     isLink: true,
//                 },
//                 type: 'user',
//                 dateCreated: 'Tue Dec 11 2016',
//                 magnitude: 10000,
//                 health: <EuiHealth color="danger">Danger</EuiHealth>,
//             },
//         ];
//
//         this.sortableProperties = new SortableProperties(
//             [
//                 {
//                     name: 'title',
//                     getValue: item => item.title.toLowerCase(),
//                     isAscending: true,
//                 },
//                 {
//                     name: 'dateCreated',
//                     getValue: item => item.dateCreated.toLowerCase(),
//                     isAscending: true,
//                 },
//                 {
//                     name: 'magnitude',
//                     getValue: item => item.magnitude.toLowerCase(),
//                     isAscending: true,
//                 },
//             ],
//             this.state.sortedColumn
//         );
//
//         this.columns = [
//             {
//                 id: 'checkbox',
//                 isCheckbox: true,
//                 textOnly: false,
//                 width: '24px',
//             },
//             {
//                 id: 'type',
//                 label: '',
//                 alignment: LEFT_ALIGNMENT,
//                 width: '24px',
//                 cellProvider: cell => <EuiIcon type={cell} size="m" />,
//                 mobileOptions: {
//                     show: false,
//                 },
//             },
//             {
//                 id: 'title',
//                 label: 'Title',
//                 footer: <em>Title</em>,
//                 alignment: LEFT_ALIGNMENT,
//                 isSortable: true,
//                 mobileOptions: {
//                     show: false,
//                 },
//             },
//             {
//                 id: 'title_type',
//                 label: 'Title',
//                 mobileOptions: {
//                     only: true,
//                     header: false,
//                     enlarge: true,
//                     fullWidth: true,
//                 },
//                 render: (title, item) => (
//                     <span>
//             <EuiIcon
//                 type={item.type}
//                 size="m"
//                 style={{ verticalAlign: 'text-top' }}
//             />{' '}
//                         {title}
//           </span>
//                 ),
//             },
//             {
//                 id: 'health',
//                 label: 'Health',
//                 footer: '',
//                 alignment: LEFT_ALIGNMENT,
//             },
//             {
//                 id: 'dateCreated',
//                 label: 'Date created',
//                 footer: 'Date created',
//                 alignment: LEFT_ALIGNMENT,
//                 isSortable: true,
//             },
//             {
//                 id: 'magnitude',
//                 label: 'Orders of magnitude',
//                 footer: ({ items, pagination }) => {
//                     const { pageIndex, pageSize } = pagination;
//                     const startIndex = pageIndex * pageSize;
//                     const pageOfItems = items.slice(
//                         startIndex,
//                         Math.min(startIndex + pageSize, items.length)
//                     );
//                     return (
//                         <strong>
//                             Total: {pageOfItems.reduce((acc, cur) => acc + cur.magnitude, 0)}
//                         </strong>
//                     );
//                 },
//                 alignment: RIGHT_ALIGNMENT,
//                 isSortable: true,
//             },
//             {
//                 id: 'actions',
//                 label: '',
//                 alignment: RIGHT_ALIGNMENT,
//                 isActionsPopover: true,
//                 width: '32px',
//             },
//         ];
//
//         this.pager = new Pager(this.items.length, this.state.itemsPerPage);
//         this.state.firstItemIndex = this.pager.getFirstItemIndex();
//         this.state.lastItemIndex = this.pager.getLastItemIndex();
//     }
//
//     onChangeItemsPerPage = itemsPerPage => {
//         this.pager.setItemsPerPage(itemsPerPage);
//         this.setState({
//             itemsPerPage,
//             firstItemIndex: this.pager.getFirstItemIndex(),
//             lastItemIndex: this.pager.getLastItemIndex(),
//         });
//     };
//
//     onChangePage = pageIndex => {
//         this.pager.goToPageIndex(pageIndex);
//         this.setState({
//             firstItemIndex: this.pager.getFirstItemIndex(),
//             lastItemIndex: this.pager.getLastItemIndex(),
//         });
//     };
//
//     onSort = prop => {
//         this.sortableProperties.sortOn(prop);
//
//         this.setState({
//             sortedColumn: prop,
//         });
//     };
//
//     toggleItem = itemId => {
//         this.setState(previousState => {
//             const newItemIdToSelectedMap = {
//                 ...previousState.itemIdToSelectedMap,
//                 [itemId]: !previousState.itemIdToSelectedMap[itemId],
//             };
//
//             return {
//                 itemIdToSelectedMap: newItemIdToSelectedMap,
//             };
//         });
//     };
//
//     toggleAll = () => {
//         const allSelected = this.areAllItemsSelected();
//         const newItemIdToSelectedMap = {};
//         this.items.forEach(
//             item => (newItemIdToSelectedMap[item.id] = !allSelected)
//         );
//
//         this.setState({
//             itemIdToSelectedMap: newItemIdToSelectedMap,
//         });
//     };
//
//     isItemSelected = itemId => {
//         return this.state.itemIdToSelectedMap[itemId];
//     };
//
//     areAllItemsSelected = () => {
//         const indexOfUnselectedItem = this.items.findIndex(
//             item => !this.isItemSelected(item.id)
//         );
//         return indexOfUnselectedItem === -1;
//     };
//
//     areAnyRowsSelected = () => {
//         return (
//             Object.keys(this.state.itemIdToSelectedMap).findIndex(id => {
//                 return this.state.itemIdToSelectedMap[id];
//             }) !== -1
//         );
//     };
//
//     togglePopover = itemId => {
//         this.setState(previousState => {
//             const newItemIdToOpenActionsPopoverMap = {
//                 ...previousState.itemIdToOpenActionsPopoverMap,
//                 [itemId]: !previousState.itemIdToOpenActionsPopoverMap[itemId],
//             };
//
//             return {
//                 itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
//             };
//         });
//     };
//
//     closePopover = itemId => {
//         // only update the state if this item's popover is open
//         if (this.isPopoverOpen(itemId)) {
//             this.setState(previousState => {
//                 const newItemIdToOpenActionsPopoverMap = {
//                     ...previousState.itemIdToOpenActionsPopoverMap,
//                     [itemId]: false,
//                 };
//
//                 return {
//                     itemIdToOpenActionsPopoverMap: newItemIdToOpenActionsPopoverMap,
//                 };
//             });
//         }
//     };
//
//     isPopoverOpen = itemId => {
//         return this.state.itemIdToOpenActionsPopoverMap[itemId];
//     };
//
//     renderSelectAll = mobile => {
//         return (
//             <EuiCheckbox
//                 id="selectAllCheckbox"
//                 label={mobile ? 'Select all' : null}
//                 checked={this.areAllItemsSelected()}
//                 onChange={this.toggleAll.bind(this)}
//                 type={mobile ? null : 'inList'}
//             />
//         );
//     };
//
//     getTableMobileSortItems() {
//         const items = [];
//         this.columns.forEach(column => {
//             if (column.isCheckbox || !column.isSortable) {
//                 return;
//             }
//             items.push({
//                 name: column.label,
//                 key: column.id,
//                 onSort: this.onSort.bind(this, column.id),
//                 isSorted: this.state.sortedColumn === column.id,
//                 isSortAscending: this.sortableProperties.isAscendingByName(column.id),
//             });
//         });
//         return items.length ? items : null;
//     }
//
//     renderHeaderCells() {
//         const headers = [];
//
//         this.columns.forEach((column, columnIndex) => {
//             if (column.isCheckbox) {
//                 headers.push(
//                     <EuiTableHeaderCellCheckbox key={column.id} width={column.width}>
//                         {this.renderSelectAll()}
//                     </EuiTableHeaderCellCheckbox>
//                 );
//             } else {
//                 headers.push(
//                     <EuiTableHeaderCell
//                         key={column.id}
//                         align={this.columns[columnIndex].alignment}
//                         width={column.width}
//                         onSort={
//                             column.isSortable ? this.onSort.bind(this, column.id) : undefined
//                         }
//                         isSorted={this.state.sortedColumn === column.id}
//                         isSortAscending={this.sortableProperties.isAscendingByName(
//                             column.id
//                         )}
//                         mobileOptions={column.mobileOptions}>
//                         {column.label}
//                     </EuiTableHeaderCell>
//                 );
//             }
//         });
//         return headers.length ? headers : null;
//     }
//
//     renderRows() {
//         const renderRow = item => {
//             const cells = this.columns.map(column => {
//                 const cell = item[column.id];
//
//                 let child;
//
//                 if (column.isCheckbox) {
//                     return (
//                         <EuiTableRowCellCheckbox key={column.id}>
//                             <EuiCheckbox
//                                 id={`${item.id}-checkbox`}
//                                 checked={this.isItemSelected(item.id)}
//                                 onChange={this.toggleItem.bind(this, item.id)}
//                                 type="inList"
//                             />
//                         </EuiTableRowCellCheckbox>
//                     );
//                 }
//
//                 if (column.isActionsPopover) {
//                     return (
//                         <EuiTableRowCell
//                             key={column.id}
//                             header={column.label}
//                             textOnly={false}
//                             hasActions={true}
//                             align="right">
//                             <EuiPopover
//                                 id={`${item.id}-actions`}
//                                 button={
//                                     <EuiButtonIcon
//                                         aria-label="Actions"
//                                         iconType="gear"
//                                         size="s"
//                                         color="text"
//                                         onClick={() => this.togglePopover(item.id)}
//                                     />
//                                 }
//                                 isOpen={this.isPopoverOpen(item.id)}
//                                 closePopover={() => this.closePopover(item.id)}
//                                 panelPaddingSize="none"
//                                 anchorPosition="leftCenter">
//                                 <EuiContextMenuPanel
//                                     items={[
//                                         <EuiContextMenuItem
//                                             key="A"
//                                             icon="pencil"
//                                             onClick={() => {
//                                                 this.closePopover(item.id);
//                                             }}>
//                                             Edit
//                                         </EuiContextMenuItem>,
//                                         <EuiContextMenuItem
//                                             key="B"
//                                             icon="share"
//                                             onClick={() => {
//                                                 this.closePopover(item.id);
//                                             }}>
//                                             Share
//                                         </EuiContextMenuItem>,
//                                         <EuiContextMenuItem
//                                             key="C"
//                                             icon="trash"
//                                             onClick={() => {
//                                                 this.closePopover(item.id);
//                                             }}>
//                                             Delete
//                                         </EuiContextMenuItem>,
//                                     ]}
//                                 />
//                             </EuiPopover>
//                         </EuiTableRowCell>
//                     );
//                 }
//
//                 if (column.render) {
//                     const titleText = item.title.truncateText
//                         ? item.title.value
//                         : item.title;
//                     const title = item.title.isLink ? (
//                         <EuiLink href="">{item.title.value}</EuiLink>
//                     ) : (
//                         titleText
//                     );
//                     child = column.render(title, item);
//                 } else if (column.cellProvider) {
//                     child = column.cellProvider(cell);
//                 } else if (cell.isLink) {
//                     child = <EuiLink href="">{cell.value}</EuiLink>;
//                 } else if (cell.truncateText) {
//                     child = cell.value;
//                 } else {
//                     child = cell;
//                 }
//
//                 return (
//                     <EuiTableRowCell
//                         key={column.id}
//                         align={column.alignment}
//                         truncateText={cell && cell.truncateText}
//                         textOnly={cell ? cell.textOnly : true}
//                         mobileOptions={{
//                             header: column.label,
//                             ...column.mobileOptions,
//                         }}>
//                         {child}
//                     </EuiTableRowCell>
//                 );
//             });
//
//             return (
//                 <EuiTableRow
//                     key={item.id}
//                     isSelected={this.isItemSelected(item.id)}
//                     isSelectable={true}
//                     hasActions={true}>
//                     {cells}
//                 </EuiTableRow>
//             );
//         };
//
//         const rows = [];
//
//         for (
//             let itemIndex = this.state.firstItemIndex;
//             itemIndex <= this.state.lastItemIndex;
//             itemIndex++
//         ) {
//             const item = this.items[itemIndex];
//             rows.push(renderRow(item));
//         }
//
//         return rows;
//     }
//
//     renderFooterCells() {
//         const footers = [];
//
//         const items = this.items;
//         const pagination = {
//             pageIndex: this.pager.getCurrentPageIndex(),
//             pageSize: this.state.itemsPerPage,
//             totalItemCount: this.pager.getTotalPages(),
//         };
//
//         this.columns.forEach(column => {
//             const footer = this.getColumnFooter(column, { items, pagination });
//             if (column.mobileOptions && column.mobileOptions.only) {
//                 return; // exclude columns that only exist for mobile headers
//             }
//
//             if (footer) {
//                 footers.push(
//                     <EuiTableFooterCell
//                         key={`footer_${column.id}`}
//                         align={column.alignment}>
//                         {footer}
//                     </EuiTableFooterCell>
//                 );
//             } else {
//                 footers.push(
//                     <EuiTableFooterCell
//                         key={`footer_empty_${footers.length - 1}`}
//                         align={column.alignment}>
//                         {undefined}
//                     </EuiTableFooterCell>
//                 );
//             }
//         });
//         return footers;
//     }
//
//     getColumnFooter = (column, { items, pagination }) => {
//         if (column.footer === null) {
//             return null;
//         }
//
//         if (column.footer) {
//             if (isFunction(column.footer)) {
//                 return column.footer({ items, pagination });
//             }
//             return column.footer;
//         }
//
//         return undefined;
//     };
//
//     render() {
//         let optionalActionButtons;
//
//         if (this.areAnyRowsSelected() > 0) {
//             optionalActionButtons = (
//                 <EuiFlexItem grow={false}>
//                     <EuiButton color="danger">Delete selected</EuiButton>
//                 </EuiFlexItem>
//             );
//         }
//
//         return (
//             <div>
//                 <EuiFlexGroup gutterSize="m">
//                     {optionalActionButtons}
//
//                     <EuiFlexItem>
//                         <EuiFieldSearch fullWidth placeholder="Search..." />
//                     </EuiFlexItem>
//                 </EuiFlexGroup>
//
//                 <EuiSpacer size="m" />
//
//                 <EuiTableHeaderMobile>
//                     <EuiFlexGroup
//                         responsive={false}
//                         justifyContent="spaceBetween"
//                         alignItems="baseline">
//                         <EuiFlexItem grow={false}>{this.renderSelectAll(true)}</EuiFlexItem>
//                         <EuiFlexItem grow={false}>
//                             <EuiTableSortMobile items={this.getTableMobileSortItems()} />
//                         </EuiFlexItem>
//                     </EuiFlexGroup>
//                 </EuiTableHeaderMobile>
//
//                 <EuiTable>
//                     <EuiTableHeader>{this.renderHeaderCells()}</EuiTableHeader>
//
//                     <EuiTableBody>{this.renderRows()}</EuiTableBody>
//
//                     <EuiTableFooter>{this.renderFooterCells()}</EuiTableFooter>
//                 </EuiTable>
//
//                 <EuiSpacer size="m" />
//
//                 <EuiTablePagination
//                     activePage={this.pager.getCurrentPageIndex()}
//                     itemsPerPage={this.state.itemsPerPage}
//                     itemsPerPageOptions={[5, 10, 20]}
//                     pageCount={this.pager.getTotalPages()}
//                     onChangeItemsPerPage={this.onChangeItemsPerPage}
//                     onChangePage={this.onChangePage}
//                 />
//             </div>
//         );
//     }
// }