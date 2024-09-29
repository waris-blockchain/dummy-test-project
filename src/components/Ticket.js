import React from 'react';

const FlightTicket = () => {
    return (
        <>
        <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>Flight Ticket Invoice</title>
                        <style>
                           
                        </style>
                    </head>
                    <body>

                        <div class="ticket-container">
                            <div class="ticket-header">
                                <img src="https://via.placeholder.com/150" alt="Airline Logo"/>
                                    <h1>Flight Ticket Invoice</h1>
                                    <p><strong>SkyHigh Airlines</strong></p>
                            </div>

                            <div class="ticket-details">

                                <div class="detail-row">
                                    <span class="detail-label">Passenger Name:</span>
                                    <span class="detail-value">John Doe</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">PNR:</span>
                                    <span class="detail-value">ABC12345</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Flight Number:</span>
                                    <span class="detail-value">SK123</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Source:</span>
                                    <span class="detail-value">New York (JFK)</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Destination:</span>
                                    <span class="detail-value">Paris (CDG)</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Departure Date:</span>
                                    <span class="detail-value">Sept 30, 2024 | 10:00 AM</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Arrival Date:</span>
                                    <span class="detail-value">Sept 30, 2024 | 2:00 PM</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Seat Number:</span>
                                    <span class="detail-value">12A</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Class:</span>
                                    <span class="detail-value">Economy</span>
                                </div>

                                <div class="detail-row">
                                    <span class="detail-label">Price:</span>
                                    <span class="detail-value">$799</span>
                                </div>

                            </div>

                          
                            <div class="qr-code">
                                <p>Scan for more details:</p>
                                <img src="https://via.placeholder.com/100" alt="QR Code"/>
                            </div>

                            <div class="ticket-footer">
                                <p>Thank you for flying with SkyHigh Airlines. Have a safe journey!</p>
                            </div>

                        </div>

                    </body>
                </html>
                </>
                );
};

export default FlightTicket;
