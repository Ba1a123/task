const employeesData =  [
  {
    id: 1,
    clientName: 'John Doe',
    contactInfo: 'john.doe@example.com',
    receivedDate: '2024-09-01',
    inventoryReceived: 'Laptop',
    inventoryDocument: 'laptop-receipt.pdf',
    reportedStatus: 'Damaged',
    clientNotes: 'Screen flickers intermittently.',
    assignedTechnician: 'Tech A',
    estimatedAmount: '150',
    deadline: '2024-09-10',
    status: 'Pending',
    note: 'Client has been informed.'
  },
  {
    id: 2,
    clientName: 'Jane Smith',
    contactInfo: 'jane.smith@example.com',
    receivedDate: '2024-09-02',
    inventoryReceived: 'Printer',
    inventoryDocument: 'printer-receipt.pdf',
    reportedStatus: 'Not Working',
    clientNotes: 'Printer does not power on.',
    assignedTechnician: 'Tech B',
    estimatedAmount: '75',
    deadline: '2024-09-15',
    status: 'In Progress',
    note: 'Awaiting parts.'
  },
  {
    id: 3,
    clientName: 'Alice Johnson',
    contactInfo: 'alice.johnson@example.com',
    receivedDate: '2024-09-03',
    inventoryReceived: 'Monitor',
    inventoryDocument: 'monitor-receipt.pdf',
    reportedStatus: 'Screen Broken',
    clientNotes: 'Cracked screen.',
    assignedTechnician: 'Tech C',
    estimatedAmount: '200',
    deadline: '2024-09-20',
    status: 'Completed',
    note: 'Replaced the screen.'
  },
  {
    id: 4,
    clientName: 'Bob Brown',
    contactInfo: 'bob.brown@example.com',
    receivedDate: '2024-09-04',
    inventoryReceived: 'Keyboard',
    inventoryDocument: 'keyboard-receipt.pdf',
    reportedStatus: 'Keys Unresponsive',
    clientNotes: 'Some keys do not work.',
    assignedTechnician: 'Tech A',
    estimatedAmount: '50',
    deadline: '2024-09-12',
    status: 'Pending',
    note: 'Replacement ordered.'
  },
  {
    id: 5,
    clientName: 'Carol White',
    contactInfo: 'carol.white@example.com',
    receivedDate: '2024-09-05',
    inventoryReceived: 'Webcam',
    inventoryDocument: 'webcam-receipt.pdf',
    reportedStatus: 'Not Detected',
    clientNotes: 'Webcam not detected by system.',
    assignedTechnician: 'Tech B',
    estimatedAmount: '60',
    deadline: '2024-09-18',
    status: 'In Progress',
    note: 'Checking connection.'
  },
  {
    id: 6,
    clientName: 'David Green',
    contactInfo: 'david.green@example.com',
    receivedDate: '2024-09-06',
    inventoryReceived: 'Router',
    inventoryDocument: 'router-receipt.pdf',
    reportedStatus: 'Connectivity Issues',
    clientNotes: 'Intermittent connection loss.',
    assignedTechnician: 'Tech C',
    estimatedAmount: '100',
    deadline: '2024-09-22',
    status: 'Completed',
    note: 'Firmware updated.'
  },
  {
    id: 7,
    clientName: 'Eva Black',
    contactInfo: 'eva.black@example.com',
    receivedDate: '2024-09-07',
    inventoryReceived: 'External Hard Drive',
    inventoryDocument: 'hard-drive-receipt.pdf',
    reportedStatus: 'Read Errors',
    clientNotes: 'Unable to read files.',
    assignedTechnician: 'Tech A',
    estimatedAmount: '120',
    deadline: '2024-09-25',
    status: 'Pending',
    note: 'Data recovery in progress.'
  },
  {
    id: 8,
    clientName: 'Frank Blue',
    contactInfo: 'frank.blue@example.com',
    receivedDate: '2024-09-08',
    inventoryReceived: 'Smartphone',
    inventoryDocument: 'smartphone-receipt.pdf',
    reportedStatus: 'Battery Issues',
    clientNotes: 'Battery drains quickly.',
    assignedTechnician: 'Tech B',
    estimatedAmount: '80',
    deadline: '2024-09-30',
    status: 'In Progress',
    note: 'Battery replacement scheduled.'
  },
  {
    id: 9,
    clientName: 'Grace Grey',
    contactInfo: 'grace.grey@example.com',
    receivedDate: '2024-09-09',
    inventoryReceived: 'Tablet',
    inventoryDocument: 'tablet-receipt.pdf',
    reportedStatus: 'Touchscreen Malfunction',
    clientNotes: 'Touchscreen not responsive.',
    assignedTechnician: 'Tech C',
    estimatedAmount: '90',
    deadline: '2024-09-28',
    status: 'Completed',
    note: 'Replaced touchscreen.'
  },
  {
    id: 10,
    clientName: 'Hank Silver',
    contactInfo: 'hank.silver@example.com',
    receivedDate: '2024-09-10',
    inventoryReceived: 'Laptop Charger',
    inventoryDocument: 'charger-receipt.pdf',
    reportedStatus: 'Not Charging',
    clientNotes: 'Charger not working.',
    assignedTechnician: 'Tech A',
    estimatedAmount: '40',
    deadline: '2024-10-05',
    status: 'Pending',
    note: 'New charger ordered.'
  }
];
export { employeesData };
