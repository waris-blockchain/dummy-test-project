import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import DatePicker from "react-datepicker";
import FlightTicket from "./Ticket"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function FlightForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [htmlContent, setHtmlContent] = useState('');
  const componentRef = useRef();

  useEffect(() => {

    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const status = params.get('status');
    if (status == "true") {
      generateAndDownloadPdf();
    }

  }, []);

  const generateAndDownloadPdf = async () => {
    const element = componentRef.current;
    element.style.display = 'block';

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('flight-ticket.pdf');
  };

  return (
    <div className='form-container-parent'>
      <div className='form-container'>
        <Row className="g-2">
          <Col lg>
          <FloatingLabel controlId="floatingInputGrid" label="Full Name">
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Source">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Destination">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <div className="date-container">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
                placeholderText="Select a date"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <div className="pay-button">
            <stripe-buy-button
              buy-button-id="buy_btn_1Q4GPnCtbPOUf1AlEe6wqJoV"
              publishable-key="pk_test_51MUP6rCtbPOUf1AlQ78bIliZdqyY3bn8pPg8ONHRpKG52OFwVjfYcn0ut8yYJSEIZsCGAgpWtaoXFVZDjhqwdeye00n8CAEBEs"
            >
            </stripe-buy-button>
          </div>
        </Row>


        <Row>
          <div ref={componentRef} style={{ display: 'none' }}>
            <FlightTicket />
          </div>
        </Row>

      </div>
    </div>
  );

}

export default FlightForm;