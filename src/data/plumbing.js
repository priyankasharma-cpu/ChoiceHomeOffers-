import { Wrench } from "lucide-react";

/* =========================================================
   PLUMBING SERVICE IMAGES
========================================================= */

import emergencyPlumbingImage from "../assets/images/plumbing/Emergency Plumbing.png";
import drainCleaningImage from "../assets/images/plumbing/dairn.png";
import cloggedDrainImage from "../assets/images/plumbing/cloggedDrainImage.png";
import leakRepairImage from "../assets/images/plumbing/leakRepairImage.png";
import pipeRepairImage from "../assets/images/plumbing/piperepair.jpg";
import burstPipeImage from "../assets/images/plumbing/burstPipeImage.webp";
import waterHeaterImage from "../assets/images/plumbing/Water-Heater-Service.jpg";
import tanklessWaterHeaterImage from "../assets/images/plumbing/TanklessWaterHeater.png";
import toiletRepairImage from "../assets/images/plumbing/Toilet Repair.png";
import faucetRepairImage from "../assets/images/plumbing/FaucetRepair.jpg";
import sinkRepairImage from "../assets/images/plumbing/sinkrepair.png";
import showerRepairImage from "../assets/images/plumbing/Showe&TubRepair.jpg";
import garbageDisposalImage from "../assets/images/plumbing/Garbage Disposal Services.png";
import sewerLineImage from "../assets/images/plumbing/Sewer-Line-Repair-in-Lancaster-SC_.webp";
import sewerCleaningImage from "../assets/images/plumbing/sewer-cleaning.webp";
import waterLineImage from "../assets/images/plumbing/WaterLineServices.png";
import sumpPumpImage from "../assets/images/plumbing/sumpumimage.png";
import waterPressureImage from "../assets/images/plumbing/WaterPressure.png";
import fixtureInstallationImage from "../assets/images/plumbing/pumbingfextureinstall.jpg";
import kitchenPlumbingImage from "../assets/images/plumbing/plumber-at-kitchen-sink.jpg";
import bathroomPlumbingImage from "../assets/images/plumbing/BathroomPlumbing.jpg";
import outdoorPlumbingImage from "../assets/images/plumbing/OutdoorPlumbing.png";
import plumbingInspectionImage from "../assets/images/plumbing/plumbing-Inspection-1.jpg";
import generalPlumbingImage from "../assets/images/plumbing/emergency-plumbing.webp";


const plumbingService = {
    // =========================================
    // MAIN PLUMBING SERVICE
    // =========================================

    id: "plumbing",
    slug: "plumbing",

    name: "Plumbing",
    title: "Plumbing",

    href: "/plumbing",

    icon: Wrench,

    phone: "+18885066168",
    displayPhone: "+1 (888) 506-6168",

    description: "Expert plumbing solutions for a safe and comfortable home.",
    // =========================================
    // PLUMBING SUB SERVICES
    // =========================================

    subServices: [
        {
            id: "emergency-plumbing",
            name: "Emergency Plumbing",
            href: "/plumbing#emergency-plumbing",
            description:
                "Get help connecting with plumbing professionals for urgent household plumbing problems.",
            image: emergencyPlumbingImage,
        },

        {
            id: "drain-cleaning",
            name: "Drain Cleaning",
            href: "/plumbing#drain-cleaning",
            description:
                "Find help for slow, clogged, or backed-up drains throughout your home.",
            image: drainCleaningImage,
        },

        {
            id: "clogged-drain",
            name: "Clogged Drain Repair",
            href: "/plumbing#clogged-drain",
            description:
                "Connect with professionals who can help diagnose and address stubborn drain clogs.",
            image: cloggedDrainImage,
        },

        {
            id: "leak-repair",
            name: "Leak Repair",
            href: "/plumbing#leak-repair",
            description:
                "Get help with leaking pipes, fixtures, connections, and other common household leaks.",
            image: leakRepairImage,
        },

        {
            id: "pipe-repair",
            name: "Pipe Repair",
            href: "/plumbing#pipe-repair",
            description:
                "Find plumbing help for damaged, leaking, or deteriorating pipes in your home.",
            image: pipeRepairImage,
        },

        {
            id: "burst-pipe",
            name: "Burst Pipe Repair",
            href: "/plumbing#burst-pipe",
            description:
                "Connect with plumbing professionals for burst or severely damaged household pipes.",
            image: burstPipeImage,
        },

        {
            id: "water-heater",
            name: "Water Heater Services",
            href: "/plumbing#water-heater",
            description:
                "Get help with water heater inspection, repair, replacement, and installation needs.",
            image: waterHeaterImage,
        },

        {
            id: "tankless-water-heater",
            name: "Tankless Water Heater",
            href: "/plumbing#tankless-water-heater",
            description:
                "Explore professional help for tankless water heater installation, repair, and maintenance.",
            image: tanklessWaterHeaterImage,
        },

        {
            id: "toilet-repair",
            name: "Toilet Repair",
            href: "/plumbing#toilet-repair",
            description:
                "Find help for clogged, leaking, running, or malfunctioning toilets.",
            image: toiletRepairImage,
        },

        {
            id: "faucet-repair",
            name: "Faucet Repair",
            href: "/plumbing#faucet-repair",
            description:
                "Connect with professionals for dripping, leaking, damaged, or outdated faucets.",
            image: faucetRepairImage,
        },

        {
            id: "sink-repair",
            name: "Sink Repair",
            href: "/plumbing#sink-repair",
            description:
                "Get help with leaking, clogged, damaged, or improperly draining sinks.",
            image: sinkRepairImage,
        },

        {
            id: "shower-repair",
            name: "Shower & Tub Repair",
            href: "/plumbing#shower-repair",
            description:
                "Find plumbing help for shower and bathtub leaks, drains, fixtures, and related issues.",
            image: showerRepairImage,
        },

        {
            id: "garbage-disposal",
            name: "Garbage Disposal Services",
            href: "/plumbing#garbage-disposal",
            description:
                "Connect with professionals for garbage disposal repair, replacement, or installation.",
            image: garbageDisposalImage,
        },

        {
            id: "sewer-line",
            name: "Sewer Line Services",
            href: "/plumbing#sewer-line",
            description:
                "Get help identifying and addressing residential sewer line problems.",
            image: sewerLineImage,
        },

        {
            id: "sewer-cleaning",
            name: "Sewer & Drain Cleaning",
            href: "/plumbing#sewer-cleaning",
            description:
                "Find professional assistance for sewer backups and difficult drainage problems.",
            image: sewerCleaningImage,
        },

        {
            id: "water-line",
            name: "Water Line Services",
            href: "/plumbing#water-line",
            description:
                "Connect with plumbing professionals for residential water line repair and replacement needs.",
            image: waterLineImage,
        },

        {
            id: "sump-pump",
            name: "Sump Pump Services",
            href: "/plumbing#sump-pump",
            description:
                "Get help with sump pump inspection, repair, replacement, and installation.",
            image: sumpPumpImage,
        },

        {
            id: "water-pressure",
            name: "Water Pressure Problems",
            href: "/plumbing#water-pressure",
            description:
                "Find help diagnosing low, inconsistent, or unusually high household water pressure.",
            image: waterPressureImage,
        },

        {
            id: "fixture-installation",
            name: "Plumbing Fixture Installation",
            href: "/plumbing#fixture-installation",
            description:
                "Connect with professionals for installation or replacement of common plumbing fixtures.",
            image: fixtureInstallationImage,
        },

        {
            id: "kitchen-plumbing",
            name: "Kitchen Plumbing",
            href: "/plumbing#kitchen-plumbing",
            description:
                "Get help with kitchen sinks, faucets, drains, disposals, and other plumbing needs.",
            image: kitchenPlumbingImage,
        },

        {
            id: "bathroom-plumbing",
            name: "Bathroom Plumbing",
            href: "/plumbing#bathroom-plumbing",
            description:
                "Find plumbing assistance for toilets, showers, tubs, sinks, faucets, and bathroom pipes.",
            image: bathroomPlumbingImage,
        },

        {
            id: "outdoor-plumbing",
            name: "Outdoor Plumbing",
            href: "/plumbing#outdoor-plumbing",
            description:
                "Connect with professionals for outdoor faucets, water lines, and related plumbing issues.",
            image: outdoorPlumbingImage,
        },

        {
            id: "plumbing-inspection",
            name: "Plumbing Inspection",
            href: "/plumbing#plumbing-inspection",
            description:
                "Get help evaluating visible plumbing components and identifying potential household issues.",
            image: plumbingInspectionImage,
        },

        {
            id: "general-plumbing",
            name: "General Plumbing Services",
            href: "/plumbing#general-plumbing",
            description:
                "Connect with plumbing professionals for a wide range of everyday residential plumbing needs.",
            image: generalPlumbingImage,
        },
    ],
};

export default plumbingService;