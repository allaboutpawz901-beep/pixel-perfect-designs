import { useEffect, useState } from "react";

export type PortalRole = "admin" | "groomer";
const KEY = "aatd-portal-role";

export function useRole(): [PortalRole, (r: PortalRole) => void, boolean] {
  const [role, setRole] = useState<PortalRole>("admin");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem(KEY) as PortalRole | null;
    if (stored === "admin" || stored === "groomer") setRole(stored);
    setReady(true);
  }, []);
  const update = (r: PortalRole) => {
    localStorage.setItem(KEY, r);
    setRole(r);
  };
  return [role, update, ready];
}

import golden from "@/assets/dog-golden.jpg";
import doodle from "@/assets/dog-doodle.jpg";
import shihtzu from "@/assets/dog-shihtzu.jpg";
import bichon from "@/assets/dog-bichon.jpg";
import pom from "@/assets/dog-pomeranian.jpg";
import schnauzer from "@/assets/dog-schnauzer.jpg";

export const dogPhoto = {
  Buddy: golden,
  Luna: bichon,
  Max: doodle,
  Bella: shihtzu,
  Charlie: pom,
  Daisy: bichon,
  Cooper: schnauzer,
} as Record<string, string>;

export type Appt = {
  time: string;
  dur?: string;
  pet: string;
  breed: string;
  service: string;
  sub?: string;
  status: "Checked In" | "Scheduled" | "In Service" | "Ready for Pickup";
};

export const todaysAppointments: Appt[] = [
  { time: "8:30 AM", dur: "(2h)", pet: "Buddy", breed: "Golden Retriever", service: "Full Groom", sub: "Owner: Sarah M.", status: "Checked In" },
  { time: "9:30 AM", dur: "(1.5h)", pet: "Luna", breed: "Poodle", service: "Full Groom + Add-ons", sub: "Mike R.", status: "Scheduled" },
  { time: "10:30 AM", dur: "(1.5h)", pet: "Max", breed: "Doodle", service: "Bath & Brush", sub: "Jessica L.", status: "Scheduled" },
  { time: "11:00 AM", dur: "(1.5h)", pet: "Bella", breed: "Shih Tzu", service: "Full Groom", sub: "Sarah M.", status: "Scheduled" },
  { time: "1:00 PM", dur: "(1h)", pet: "Charlie", breed: "French Bulldog", service: "Nail Trim", sub: "Mike R.", status: "Scheduled" },
];

export const groomerAppointments: Appt[] = [
  { time: "8:30 AM", dur: "(2h)", pet: "Buddy", breed: "Golden Retriever", service: "Full Groom", sub: "Owner: Sarah M.", status: "Checked In" },
  { time: "9:30 AM", dur: "(1.5h)", pet: "Luna", breed: "Poodle", service: "Full Groom + Add-ons", sub: "Owner: Mike R.", status: "In Service" },
  { time: "11:00 AM", dur: "(1.5h)", pet: "Max", breed: "Goldenoodle", service: "Bath & Brush", sub: "Owner: Jessica L.", status: "In Service" },
  { time: "12:30 PM", dur: "(1h)", pet: "Charlie", breed: "French Bulldog", service: "Nail Trim", sub: "Owner: Mike R.", status: "Scheduled" },
  { time: "1:30 PM", dur: "(1.5h)", pet: "Bella", breed: "Shih Tzu", service: "Full Groom", sub: "Owner: Sarah M.", status: "Ready for Pickup" },
  { time: "3:00 PM", dur: "(1.5h)", pet: "Daisy", breed: "Maltese", service: "Full Groom + Add-ons", sub: "Owner: Sarah M.", status: "Scheduled" },
  { time: "4:30 PM", dur: "(1h)", pet: "Cooper", breed: "Corgi", service: "Bath & Brush", sub: "Owner: Alex D.", status: "Scheduled" },
];

export const revenueSeries = [
  { day: "Mon", v: 3200 },
  { day: "Tue", v: 3800 },
  { day: "Wed", v: 5200 },
  { day: "Thu", v: 4400 },
  { day: "Fri", v: 5600 },
  { day: "Sat", v: 7000 },
  { day: "Sun", v: 5100 },
];

export const staffToday = [
  { name: "Sarah M.", role: "Groomer", appts: 7, slots: "bbbbbbbrxx" },
  { name: "Mike R.", role: "Groomer", appts: 6, slots: "bbbbbbrxxx" },
  { name: "Jessica L.", role: "Groomer", appts: 6, slots: "bbbbbbrxxx" },
  { name: "Taylor P.", role: "Bather", appts: 5, slots: "bbbbbrxxxx" },
  { name: "Alex D.", role: "Bather", appts: 4, slots: "bbbbrxxxxx" },
];

export const groomingRecords = [
  { pet: "Buddy", breed: "Golden Retriever", date: "May 12, 2025", service: "Full Groom", groomer: "Sarah M.", amount: "$95.00" },
  { pet: "Luna", breed: "Poodle", date: "May 11, 2025", service: "Full Groom + Add-ons", groomer: "Mike R.", amount: "$120.00" },
  { pet: "Charlie", breed: "French Bulldog", date: "May 10, 2025", service: "Bath & Brush", groomer: "Jessica L.", amount: "$65.00" },
  { pet: "Daisy", breed: "Maltese", date: "May 9, 2025", service: "Full Groom", groomer: "Sarah M.", amount: "$85.00" },
];

export const funnel = [
  { label: "Website Visits", value: 412, w: 100, tone: "oklch(0.75 0.13 300)" },
  { label: "Account Created", value: 189, w: 88, tone: "oklch(0.68 0.13 250)" },
  { label: "Intake Completed", value: 142, w: 76, tone: "oklch(0.75 0.13 155)" },
  { label: "Booked", value: 118, w: 64, tone: "oklch(0.82 0.13 85)" },
  { label: "Completed", value: 96, w: 52, tone: "oklch(0.7 0.16 15)" },
];
