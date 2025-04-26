import { createLocalizedError, createLocalizedSuccess } from "../../common/locale/localizationHelper.mjs";
import ApprovalListService from "./approvalList.service.mjs";

export const createApprovalListController = async (req, res, next) => {
    try {
        const result = await ApprovalListService.createApprovalList(req.body);
        return createLocalizedSuccess(res, 'successCreateApprovalList', result);
    } catch (error) {
        next(error);
    }
};

export const getAllApprovalListController = async (req, res, next) => {
    try {
        const lists = await ApprovalListService.getAllApprovalLists();
        return createLocalizedSuccess(res, 'successGetApprovalList', lists);
    } catch (error) {
        next(error);
    }
};

export const getApprovalListByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const list = await ApprovalListService.getApprovalListById(id);

        if (!list) throw createLocalizedError("approvalListNotFound");

        return createLocalizedSuccess(res, "successGetApprovalList", list);
    } catch (error) {
        next(error);
    }
};

export const updateApprovalListByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updated = await ApprovalListService.updateApprovalList(id, req.body);

        if (!updated) throw createLocalizedError("approvalListNotFound");

        return createLocalizedSuccess(res, "successUpdateApprovalList", updated);
    } catch (error) {
        next(error);
    }
};

export const deleteApprovalListByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await ApprovalListService.deleteApprovalList(id);

        if (!deleted) throw createLocalizedError("approvalListNotFound");

        return createLocalizedSuccess(res, "successDeleteApprovalList");
    } catch (error) {
        next(error);
    }
};

export default {
    createApprovalListController,
    getAllApprovalListController,
    getApprovalListByIdController,
    updateApprovalListByIdController,
    deleteApprovalListByIdController
};
