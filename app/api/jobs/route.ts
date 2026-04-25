import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: "desc" },
      include: { company: true },
    });
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.slug) {
      body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    }
    const job = await prisma.job.create({
      data: {
        title: body.title,
        description: body.description,
        identifier: body.identifier,
        jobId: body.jobId,
        slug: body.slug,
        datePosted: body.datePosted,
        validThrough: body.validThrough,
        dateModified: body.dateModified,
        hiringOrgName: body.hiringOrgName,
        hiringOrgUrl: body.hiringOrgUrl,
        hiringOrgLogo: body.hiringOrgLogo,
        hiringOrgSameAs: body.hiringOrgSameAs,
        streetAddress: body.streetAddress,
        addressLocality: body.addressLocality,
        addressRegion: body.addressRegion,
        postalCode: body.postalCode,
        addressCountry: body.addressCountry,
        jobLocationType: body.jobLocationType,
        applicantLocationRequirements: body.applicantLocationRequirements,
        employmentType: body.employmentType,
        workHours: body.workHours,
        jobStartDate: body.jobStartDate,
        jobDuration: body.jobDuration,
        jobImmediateStart: body.jobImmediateStart,
        totalJobOpenings: body.totalJobOpenings ? Number(body.totalJobOpenings) : null,
        employmentUnit: body.employmentUnit,
        salaryValue: body.salaryValue,
        baseSalary: body.baseSalary,
        salaryCurrency: body.salaryCurrency,
        salaryUnitText: body.salaryUnitText,
        estimatedSalary: body.estimatedSalary,
        educationRequirements: body.educationRequirements,
        experienceRequirements: body.experienceRequirements,
        experienceInPlaceOfEducation: body.experienceInPlaceOfEducation || null,
        qualifications: body.qualifications,
        skills: body.skills,
        physicalRequirement: body.physicalRequirement,
        sensoryRequirement: body.sensoryRequirement,
        securityClearanceRequirement: body.securityClearanceRequirement,
        responsibilities: body.responsibilities,
        industry: body.industry,
        occupationalCategory: body.occupationalCategory,
        specialCommitments: body.specialCommitments,
        incentives: body.incentives,
        incentiveCompensation: body.incentiveCompensation,
        benefits: body.benefits,
        jobBenefits: body.jobBenefits,
        applyUrl: body.applyUrl,
        applicationContact: body.applicationContact,
        applicationDeadline: body.applicationDeadline,
        directApply: body.directApply || null,
        category: body.category,
        seniority: body.seniority,
        isActive: body.isActive ?? true,
        whoShouldApply: body.whoShouldApply,
      },
    });
    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, company, createdAt, updatedAt, ...data } = body;
    const job = await prisma.job.update({
      where: { id: Number(id) },
      data,
    });
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    await prisma.job.delete({
      where: { id: Number(body.id) },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}