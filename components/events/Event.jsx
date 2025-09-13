"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchEvents } from "@/util/server";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const response = await fetchEvents(1, 20); // Fetch up to 20 events
        setEvents(response.events || []);
        setError(null);
      } catch (err) {
        console.error("Error loading events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="container py-5" style={{ marginTop: "120px" }}>
        <h2 className="text-center fw-bold mb-4">✨ Events</h2>
        <div className="text-center">
          <p>Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5" style={{ marginTop: "120px" }}>
        <h2 className="text-center fw-bold mb-4">✨ Events</h2>
        <div className="text-center">
          <p className="text-danger">{error}</p>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="container py-5" style={{ marginTop: "120px" }}>
        <h2 className="text-center fw-bold mb-4">✨ Events</h2>
        <div className="text-center">
          <p>No events available at the moment.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container py-5" style={{ marginTop: "120px" }}>
      <h2 className="text-center fw-bold mb-4">✨ Events</h2>
      
      <div className="event-list">
        {events.map((event, index) => (
          <div key={event._id || index} className="event-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <Image
              src={event.image || "/img/events/default.jpg"}
              height={400}
              width={700}
              alt={event.slug || "Event"}
              className="event-image"
            />
            <div className="event-content">
              <h4>{event.slug || "Event"}</h4>
              <p className="event-date">
                📅 {new Date(event.eventDate).toLocaleDateString("en-US", { 
                  month: "long", 
                  day: "numeric", 
                  year: "numeric" 
                })}
              </p>
              <p>{event.shortDescription || "No description available"}</p>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .event-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        .event-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.1s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px;
        }
        .event-card:hover {
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
        }
        .event-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
        }
        .event-content {
          padding-top: 15px;
        }
        .event-date {
          font-size: 14px;
          color: #555;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Event;
