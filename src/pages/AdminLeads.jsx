import { useState } from "react";
import {
    Search,
    Trash2,
    Users,
    MapPin,
    Mail,
    Phone,
    CalendarDays,
    ClipboardList,
    House,
} from "lucide-react";

import SEO from "../components/SEO";

<SEO
    title="Admin Leads"
    description="Choice Home Offers administration."
    canonical="/admin/leads"
/>

export default function AdminLeads() {
    const [search, setSearch] = useState("");

    /* =========================================
       LOAD LEADS FROM LOCAL STORAGE
    ========================================== */

    const [leads, setLeads] = useState(() => {
        try {
            const savedLeads = localStorage.getItem("rapidHomaLeads");

            return savedLeads ? JSON.parse(savedLeads) : [];
        } catch (error) {
            console.error("Failed to load leads:", error);
            return [];
        }
    });
    /* =========================================
       DELETE SINGLE LEAD
    ========================================== */

    const deleteLead = (id) => {
        const updatedLeads = leads.filter(
            (lead) => lead.id !== id
        );

        localStorage.setItem(
            "rapidHomaLeads",
            JSON.stringify(updatedLeads)
        );

        setLeads(updatedLeads);
    };


    /* =========================================
       CLEAR ALL LEADS
    ========================================== */

    const clearAllLeads = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete all leads?"
        );

        if (!confirmDelete) return;

        localStorage.removeItem("rapidHomaLeads");

        setLeads([]);
    };


    /* =========================================
       SEARCH
    ========================================== */

    const filteredLeads = leads.filter((lead) => {
        const query = search.toLowerCase();

        return (
            lead.name?.toLowerCase().includes(query) ||
            lead.email?.toLowerCase().includes(query) ||
            lead.phone?.toLowerCase().includes(query) ||
            lead.zipCode?.toLowerCase().includes(query) ||
            lead.service?.toLowerCase().includes(query)
        );
    });


    /* =========================================
       FORMAT DATE
    ========================================== */

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    };


    return (
        <div className="min-h-screen bg-[#F0F5F8]">

            {/* =====================================
                HEADER
            ====================================== */}

            <header className="sticky top-0 z-40 border-b border-[#E1E7ED] bg-[#FFFFFF]/95 backdrop-blur-xl">

                <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

                    {/* Logo */}

                    <a
                        href="/"
                        className="flex items-center gap-3"
                    >

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F5F8]">
                            <House
                                size={23}
                                className="text-[#008F89]"
                            />
                        </div>

                        <div>
                            <h1 className="text-[20px] font-extrabold tracking-[-0.7px] text-[#12345C]">
                                Choice Home <span className="text-[#008F89]">Offers</span>
                            </h1>

                            <p className="text-[9px] font-bold uppercase tracking-[1.4px] text-[#657A94]">
                                Admin Dashboard
                            </p>
                        </div>

                    </a>


                    {/* Admin */}

                    <div className="flex items-center gap-3">

                        <div className="hidden text-right sm:block">

                            <p className="text-[12px] font-bold text-[#12345C]">
                                Administrator
                            </p>

                            <p className="text-[10px] text-[#657A94]">
                                Lead Management
                            </p>

                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12345C] text-sm font-bold text-white">
                            A
                        </div>

                    </div>

                </div>

            </header>


            {/* =====================================
                MAIN
            ====================================== */}

            <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">


                {/* Page Heading */}

                <div className="mb-8">

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E1E7ED] bg-[#FFFFFF] px-3.5 py-2">

                        <ClipboardList
                            size={14}
                            className="text-[#008F89]"
                        />

                        <span className="text-[10px] font-extrabold uppercase tracking-[1.4px] text-[#008F89]">
                            Lead Management
                        </span>

                    </div>


                    <h2 className="font-serif text-[38px] font-bold tracking-[-1.5px] text-[#12345C] sm:text-[44px]">
                        Quote Requests
                    </h2>

                    <p className="mt-2 text-sm text-[#657A94]">
                        Manage and review all leads submitted through
                        the Choice Home Offers quote form.
                    </p>

                </div>


                {/* =====================================
                    STAT CARDS
                ====================================== */}

                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Total Leads */}

                    <div className="rounded-2xl border border-[#E1E7ED] bg-[#FFFFFF] p-5 shadow-[0_5px_20px_rgba(45,35,25,0.04)]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#657A94]">
                                    Total Leads
                                </p>

                                <p className="mt-2 text-[30px] font-extrabold tracking-[-1px] text-[#12345C]">
                                    {leads.length}
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5F8]">
                                <Users
                                    size={22}
                                    className="text-[#008F89]"
                                />
                            </div>

                        </div>

                    </div>


                    {/* Matching Results */}

                    <div className="rounded-2xl border border-[#E1E7ED] bg-[#FFFFFF] p-5 shadow-[0_5px_20px_rgba(45,35,25,0.04)]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#657A94]">
                                    Showing
                                </p>

                                <p className="mt-2 text-[30px] font-extrabold tracking-[-1px] text-[#12345C]">
                                    {filteredLeads.length}
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5F8]">
                                <Search
                                    size={21}
                                    className="text-[#657A94]"
                                />
                            </div>

                        </div>

                    </div>


                    {/* Latest Lead */}

                    <div className="rounded-2xl border border-[#E1E7ED] bg-[#FFFFFF] p-5 shadow-[0_5px_20px_rgba(45,35,25,0.04)]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-[11px] font-bold uppercase tracking-[1px] text-[#657A94]">
                                    Latest Lead
                                </p>

                                <p className="mt-2 text-[14px] font-extrabold text-[#12345C]">
                                    {leads.length > 0
                                        ? formatDate(
                                            leads[leads.length - 1]
                                                ?.submittedAt
                                        )
                                        : "No leads yet"}
                                </p>

                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F5F8]">
                                <CalendarDays
                                    size={21}
                                    className="text-[#4267A8]"
                                />
                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    TABLE CONTAINER
                ====================================== */}

                <div className="overflow-hidden rounded-[22px] border border-[#E1E7ED] bg-[#FFFFFF] shadow-[0_10px_35px_rgba(45,35,25,0.06)]">


                    {/* Table Header */}

                    <div className="flex flex-col gap-4 border-b border-[#E1E7ED] p-5 sm:flex-row sm:items-center sm:justify-between">

                        {/* Search */}

                        <div className="relative w-full sm:max-w-[360px]">

                            <Search
                                size={17}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#657A94]"
                            />

                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="h-11 w-full rounded-xl border border-[#E1E7ED] bg-[#F0F5F8] pl-11 pr-4 text-sm text-[#12345C] outline-none placeholder:text-[#657A94] transition focus:border-[#008F89] focus:bg-white focus:ring-4 focus:ring-[#008F89]/10"
                            />

                        </div>


                        {/* Clear */}

                        {leads.length > 0 && (

                            <button
                                type="button"
                                onClick={clearAllLeads}
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#E1E7ED] bg-white px-4 text-xs font-bold text-[#A24C38] transition hover:border-[#C96850] hover:bg-[#FFF5F2]"
                            >

                                <Trash2 size={15} />

                                Clear All Leads

                            </button>

                        )}

                    </div>


                    {/* =====================================
                        EMPTY STATE
                    ====================================== */}

                    {filteredLeads.length === 0 ? (

                        <div className="flex min-h-[350px] flex-col items-center justify-center px-6 text-center">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F5F8]">
                                <ClipboardList
                                    size={28}
                                    className="text-[#008F89]"
                                />
                            </div>

                            <h3 className="mt-5 text-lg font-bold text-[#12345C]">
                                No leads found
                            </h3>

                            <p className="mt-2 max-w-sm text-sm leading-6 text-[#657A94]">
                                {leads.length === 0
                                    ? "When someone submits the quote form, their information will appear here."
                                    : "Try changing your search keyword."}
                            </p>

                        </div>

                    ) : (

                        /* =====================================
                           DESKTOP TABLE
                        ====================================== */

                        <div className="overflow-x-auto">

                            <table className="w-full min-w-[1050px] border-collapse">

                                <thead>

                                    <tr className="border-b border-[#E1E7ED] bg-[#F0F5F8]">

                                        <th className="px-5 py-4 text-left text-[10px] font-extrabold uppercase tracking-[1px] text-[#657A94]">
                                            Lead
                                        </th>

                                        <th className="px-5 py-4 text-left text-[10px] font-extrabold uppercase tracking-[1px] text-[#657A94]">
                                            Service
                                        </th>

                                        <th className="px-5 py-4 text-left text-[10px] font-extrabold uppercase tracking-[1px] text-[#657A94]">
                                            Contact
                                        </th>

                                        <th className="px-5 py-4 text-left text-[10px] font-extrabold uppercase tracking-[1px] text-[#657A94]">
                                            ZIP Code
                                        </th>

                                        <th className="px-5 py-4 text-left text-[10px] font-extrabold uppercase tracking-[1px] text-[#657A94]">
                                            Submitted
                                        </th>

                                        <th className="px-5 py-4 text-right text-[10px] font-extrabold uppercase tracking-[1px] text-[#657A94]">
                                            Action
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {filteredLeads.map((lead) => (

                                        <tr
                                            key={lead.id}
                                            className="border-b border-[#E1E7ED] transition hover:bg-[#FFFFFF]"
                                        >

                                            {/* Lead */}

                                            <td className="px-5 py-5">

                                                <div className="flex items-center gap-3">

                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12345C] text-xs font-bold text-white">
                                                        {lead.name
                                                            ?.charAt(0)
                                                            ?.toUpperCase() || "?"}
                                                    </div>

                                                    <div>

                                                        <p className="text-sm font-bold text-[#12345C]">
                                                            {lead.name || "-"}
                                                        </p>

                                                        <p className="mt-0.5 text-[11px] text-[#657A94]">
                                                            Lead #{lead.id}
                                                        </p>

                                                    </div>

                                                </div>

                                            </td>


                                            {/* Service */}

                                            <td className="px-5 py-5">

                                                <span className="inline-flex rounded-full bg-[#F0F5F8] px-3 py-1.5 text-[11px] font-bold text-[#008F89]">
                                                    {lead.service || "-"}
                                                </span>

                                            </td>


                                            {/* Contact */}

                                            <td className="px-5 py-5">

                                                <div className="space-y-1.5">

                                                    <div className="flex items-center gap-2 text-[11px] text-[#657A94]">

                                                        <Mail size={13} />

                                                        {lead.email || "-"}

                                                    </div>

                                                    <div className="flex items-center gap-2 text-[11px] text-[#657A94]">

                                                        <Phone size={13} />

                                                        {lead.phone || "-"}

                                                    </div>

                                                </div>

                                            </td>


                                            {/* ZIP */}

                                            <td className="px-5 py-5">

                                                <div className="flex items-center gap-2 text-sm font-semibold text-[#12345C]">

                                                    <MapPin
                                                        size={14}
                                                        className="text-[#008F89]"
                                                    />

                                                    {lead.zipCode || "-"}

                                                </div>

                                            </td>


                                            {/* Date */}

                                            <td className="px-5 py-5">

                                                <div className="flex items-center gap-2 text-[11px] text-[#657A94]">

                                                    <CalendarDays size={14} />

                                                    {formatDate(
                                                        lead.submittedAt
                                                    )}

                                                </div>

                                            </td>


                                            {/* Delete */}

                                            <td className="px-5 py-5 text-right">

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        deleteLead(lead.id)
                                                    }
                                                    title="Delete lead"
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#9A6860] transition hover:bg-[#FFF1EE] hover:text-[#B7432C]"
                                                >

                                                    <Trash2 size={16} />

                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </main>

        </div>
    );
}