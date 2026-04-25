import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(companies);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch companies" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const company = await prisma.company.create({
      data: {
        name: body.name,
        legalName: body.legalName,
        url: body.url,
        description: body.description,
        logo: body.logo,
        image: body.image,
        streetAddress: body.streetAddress,
        addressLocality: body.addressLocality,
        addressRegion: body.addressRegion,
        postalCode: body.postalCode,
        addressCountry: body.addressCountry,
        telephone: body.telephone,
        email: body.email,
        contactType: body.contactType,
        areaServed: body.areaServed,
        availableLanguage: body.availableLanguage,
        sameAs: body.sameAs,
        taxID: body.taxID,
        vatID: body.vatID,
        duns: body.duns,
        leiCode: body.leiCode,
        iso6523Code: body.iso6523Code,
        foundingDate: body.foundingDate,
        foundingLocation: body.foundingLocation,
        numberOfEmployees: body.numberOfEmployees,
        parentOrganization: body.parentOrganization,
        subOrganization: body.subOrganization,
        award: body.award,
      },
    });
    return NextResponse.json(company, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create company" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const company = await prisma.company.update({
      where: { id: body.id },
      data: body,
    });
    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update company" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    await prisma.company.delete({
      where: { id: body.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete company" }, { status: 500 });
  }
}